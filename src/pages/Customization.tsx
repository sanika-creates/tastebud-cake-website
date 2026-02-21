import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AOS from "aos";
import { gsap } from "gsap";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

import { db } from "../firebaseConfig"; // adjust the path based on your folder structure
import { ref, push } from "firebase/database";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  contact: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  cakeType: z.string().min(1, "Please select a cake type"),
  flavor: z.string().min(1, "Please select a flavor"),
  theme: z.string().min(10, "Please describe your theme in detail (at least 10 characters)"),
  size: z.string().min(1, "Please specify the size/weight"),
  deliveryDate: z.date({ required_error: "Please select a delivery date" }),
  deliveryTime: z.string().min(1, "Please select a preferred time"),
  address: z.string().min(10, "Please provide a complete delivery address"),
});

type FormData = z.infer<typeof formSchema>;

const Customization = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const cakeType = watch("cakeType");
  const flavor = watch("flavor");
  const deliveryTime = watch("deliveryTime");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // GSAP button hover animation
    const buttons = document.querySelectorAll(".custom-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  const onSubmit = async (data: FormData) => {
    try {
      // Save to Firebase Realtime Database
      const ordersRef = ref(db, "customOrders"); // "customOrders" is your DB node
      await push(ordersRef, {
        ...data,
        deliveryDate: data.deliveryDate?.toString(), // Convert Date object to string
        createdAt: new Date().toISOString(),
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        reset();
        setSelectedDate(undefined);
      }, 5000);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Something went wrong while submitting your order. Please try again.");
    }
  };

  const handleReset = () => {
    reset();
    setSelectedDate(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Heading Section */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              🎨 Customize Your Cake, Your Way!
            </h1>
            <p className="text-lg text-foreground/80">
              Tell us what you dream, and we'll bake it into reality.
            </p>
          </div>

          {/* Form Container */}
          <div
            className="bg-card rounded-3xl p-8 md:p-12 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {submitted ? (
              <div className="text-center py-12" data-aos="zoom-in">
                <div className="text-6xl mb-6">🍰</div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Thank You!
                </h2>
                <p className="text-lg text-foreground/80">
                  We'll get in touch soon to confirm your dream cake 💬
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-user text-primary"></i>
                    Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Contact Number */}
                <div>
                  <Label htmlFor="contact" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-phone text-primary"></i>
                    Contact Number *
                  </Label>
                  <Input
                    id="contact"
                    placeholder="10-digit mobile number"
                    {...register("contact")}
                    className={errors.contact ? "border-destructive" : ""}
                  />
                  {errors.contact && (
                    <p className="text-destructive text-sm mt-1">{errors.contact.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-envelope text-primary"></i>
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Cake Type */}
                <div>
                  <Label htmlFor="cakeType" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-cake-candles text-primary"></i>
                    Cake Type *
                  </Label>
                  <Select
                    value={cakeType}
                    onValueChange={(value) => setValue("cakeType", value)}
                  >
                    <SelectTrigger className={errors.cakeType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select cake type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cake">Cake</SelectItem>
                      <SelectItem value="cupcakes">Cupcakes</SelectItem>
                      <SelectItem value="jar">Jar Dessert</SelectItem>
                      <SelectItem value="brownie">Brownie</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.cakeType && (
                    <p className="text-destructive text-sm mt-1">{errors.cakeType.message}</p>
                  )}
                </div>

                {/* Flavor */}
                <div>
                  <Label htmlFor="flavor" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-ice-cream text-primary"></i>
                    Flavor Preference *
                  </Label>
                  <Select
                    value={flavor}
                    onValueChange={(value) => setValue("flavor", value)}
                  >
                    <SelectTrigger className={errors.flavor ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select flavor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chocolate">Chocolate</SelectItem>
                      <SelectItem value="red-velvet">Red Velvet</SelectItem>
                      <SelectItem value="vanilla">Vanilla</SelectItem>
                      <SelectItem value="butterscotch">Butterscotch</SelectItem>
                      <SelectItem value="black-forest">Black Forest</SelectItem>
                      <SelectItem value="fruit">Fruit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.flavor && (
                    <p className="text-destructive text-sm mt-1">{errors.flavor.message}</p>
                  )}
                </div>

                {/* Theme */}
                <div>
                  <Label htmlFor="theme" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-palette text-primary"></i>
                    Theme / Design Details *
                  </Label>
                  <Textarea
                    id="theme"
                    placeholder="Describe your desired theme, colors, decorations, or any special requests..."
                    rows={4}
                    {...register("theme")}
                    className={errors.theme ? "border-destructive" : ""}
                  />
                  {errors.theme && (
                    <p className="text-destructive text-sm mt-1">{errors.theme.message}</p>
                  )}
                </div>

                {/* Size/Weight */}
                <div>
                  <Label htmlFor="size" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-ruler text-primary"></i>
                    Size / Weight *
                  </Label>
                  <Input
                    id="size"
                    placeholder="e.g., 1kg, 2kg, 12 cupcakes"
                    {...register("size")}
                    className={errors.size ? "border-destructive" : ""}
                  />
                  {errors.size && (
                    <p className="text-destructive text-sm mt-1">{errors.size.message}</p>
                  )}
                </div>

                {/* Delivery Date */}
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <i className="fas fa-calendar text-primary"></i>
                    Delivery Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground",
                          errors.deliveryDate && "border-destructive"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setSelectedDate(date);
                          if (date) setValue("deliveryDate", date);
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.deliveryDate && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.deliveryDate.message}
                    </p>
                  )}
                </div>

                {/* Delivery Time */}
                <div>
                  <Label htmlFor="deliveryTime" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-clock text-primary"></i>
                    Preferred Time *
                  </Label>
                  <Select
                    value={deliveryTime}
                    onValueChange={(value) => setValue("deliveryTime", value)}
                  >
                    <SelectTrigger className={errors.deliveryTime ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.deliveryTime && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.deliveryTime.message}
                    </p>
                  )}
                </div>

                {/* Delivery Address */}
                <div>
                  <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                    Delivery Address *
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="Complete address with landmark"
                    rows={3}
                    {...register("address")}
                    className={errors.address ? "border-destructive" : ""}
                  />
                  {errors.address && (
                    <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                {/* Reference Image */}
                <div>
                  <Label htmlFor="reference" className="flex items-center gap-2 mb-2">
                    <i className="fas fa-paperclip text-primary"></i>
                    Upload Reference Image (Optional)
                  </Label>
                  <Input
                    id="reference"
                    type="file"
                    accept="image/*"
                    className="cursor-pointer"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    className="custom-btn btn-primary flex-1"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Submit Custom Order
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    className="custom-btn flex-1"
                  >
                    <i className="fas fa-redo mr-2"></i>
                    Reset Form
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Customization;
