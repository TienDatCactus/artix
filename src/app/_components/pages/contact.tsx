"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Họ và tên cần có ít nhất 2 kí tự.",
  }),
  email: z.string().email({
    message: "Email không hợp lệ.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Số điện thoại cần có ít nhất 10 kí tự.",
    })
    .max(11, {
      message: "Số điện thoại không hợp lệ.",
    }),
  request: z.string().min(10, {
    message: "Yêu cầu cần có ít nhất 10 kí tự.",
  }),
});
const Contact: React.FC = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      request: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setStatus("");

    const url =
      process.env.NEXT_PUBLIC_GOOGLE_APP_URL ||
      "https://script.google.com/macros/s/AKfycby4w4TqGoY092MU9dAPznGscujYISyAWAgcBUfYffasV70K8RwWyJIRVxwHeCrhwFvGvg/exec";

    // Create form data for the request
    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("request", values.request);

    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors", // This is important for Google Apps Script
    })
      .then(() => {
        setStatus("Gửi thành công!");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("Lỗi kết nối. Vui lòng thử lại sau.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }
  return (
    <section
      id="contact"
      className="max-w-[125rem] mx-auto lg:px-20 pb-20 lg:py-20 relative z-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-50 lg:w-1/2 w-90 mx-auto p-8 rounded-lg shadow-lg z-20 cursor-grab"
      >
        <div className="text-center  pb-6">
          <h1 className="text-true-primary text-4xl font-semibold">
            ORDER NGAY
          </h1>
          <p className="text-gray-800 text-lg mt-4">
            Để mang đến cho Quý khách trải nghiệm tốt nhất với các dịch vụ, sản
            phẩm của Artix Studio, vui lòng để lại thông tin đặt hàng.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="lg:h-14"
                      placeholder="Họ và tên"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="lg:h-14" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      className="lg:h-14"
                      placeholder="Số điện thoại"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="request"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="lg:h-32"
                      rows={6}
                      placeholder="Yêu cầu của bạn"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {status && (
              <div
                className={`text-center p-2 rounded ${
                  status.includes("thành công")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status}
              </div>
            )}
            <div className="text-center lg:pt-6">
              <Button
                variant={"default"}
                type="submit"
                disabled={isSubmitting}
                className="text-xl text-white bg-true-primary hover:text-true-primary hover:bg-transparent border-2 border-true-primary rounded-full cursor-pointer lg:p-6"
              >
                {isSubmitting ? "ĐANG GỬI..." : "GỬI NGAY"}
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </section>
  );
};

export default Contact;
