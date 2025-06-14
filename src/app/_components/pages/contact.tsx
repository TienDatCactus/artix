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
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  fullname: z.string().min(2, {
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      request: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section
      id="contact"
      className="max-w-[125rem] mx-auto lg:px-20 lg:pb-20 relative z-20"
    >
      <motion.div
        drag
        dragElastic={0.5}
        whileDrag={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-50 lg:w-1/2 mx-auto p-8 rounded-lg shadow-lg z-20 cursor-grab"
      >
        <div className="text-center lg:pb-6">
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
              name="fullname"
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
            <div className="text-center lg:pt-6">
              <Button
                variant={"default"}
                className="text-xl text-white bg-true-primary hover:text-true-primary hover:bg-transparent border-2 border-true-primary rounded-full cursor-pointer lg:p-6 "
              >
                GỬI NGAY
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </section>
  );
};

export default Contact;
