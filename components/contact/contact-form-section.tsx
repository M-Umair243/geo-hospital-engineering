"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const ContactFormSection = () => {
  return (
    <section className="bg-slate-50 py-16">
      {" "}
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {" "}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          {" "}
          <span className="inline-flex rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            {" "}
            Let&apos;s Talk{" "}
          </span>{" "}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            {" "}
            Send us your inquiry{" "}
          </h2>{" "}
          <p className="mt-4 text-base leading-8 text-slate-600">
            {" "}
            Whether you need hospital beds, ward furniture, clinical equipment,
            or a custom quotation, our team is ready to assist you with the
            right solution.{" "}
          </p>{" "}
          <div className="mt-8 space-y-4 rounded-2xl bg-slate-50 p-5">
            {" "}
            <div>
              {" "}
              <h3 className="font-semibold text-slate-900">
                Why contact us?
              </h3>{" "}
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {" "}
                Get support for product details, pricing, bulk orders, category
                information, and healthcare equipment recommendations.{" "}
              </p>{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="font-semibold text-slate-900">
                Fast response
              </h3>{" "}
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {" "}
                We aim to respond to inquiries promptly and help you find the
                right products for your healthcare requirements.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          {" "}
          <h3 className="text-2xl font-semibold text-slate-900">
            {" "}
            Request a Quote{" "}
          </h3>{" "}
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {" "}
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.{" "}
          </p>{" "}
          <form className="mt-8 space-y-5">
            {" "}
            <div className="grid gap-5 sm:grid-cols-2">
              {" "}
              <div className="space-y-2">
                {" "}
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-slate-700"
                >
                  {" "}
                  Full Name{" "}
                </label>{" "}
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="h-12 rounded-xl border-slate-300"
                />{" "}
              </div>{" "}
              <div className="space-y-2">
                {" "}
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-700"
                >
                  {" "}
                  Phone Number{" "}
                </label>{" "}
                <Input
                  id="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  className="h-12 rounded-xl border-slate-300"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="grid gap-5 sm:grid-cols-2">
              {" "}
              <div className="space-y-2">
                {" "}
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  {" "}
                  Email Address{" "}
                </label>{" "}
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 rounded-xl border-slate-300"
                />{" "}
              </div>{" "}
              <div className="space-y-2">
                {" "}
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-700"
                >
                  {" "}
                  Subject{" "}
                </label>{" "}
                <Input
                  id="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="h-12 rounded-xl border-slate-300"
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-y-2">
              {" "}
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-700"
              >
                {" "}
                Message{" "}
              </label>{" "}
              <Textarea
                id="message"
                placeholder="Write your inquiry or product requirement..."
                className="min-h-[150px] rounded-2xl border-slate-300"
              />{" "}
            </div>{" "}
            <Button className="h-12 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white hover:bg-slate-800">
              {" "}
              Send Message{" "}
            </Button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default ContactFormSection;
