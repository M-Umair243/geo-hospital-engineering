import { Clock3, Mail, MapPin, Phone } from "lucide-react";
const contactCards = [
  {
    title: "Visit Us",
    description: "243 RB Roshanwali Jhal, Faisalabad, Pakistan",
    icon: MapPin,
  },
  { title: "Call Us", description: "041-2344567", icon: Phone },
  {
    title: "Email Us",
    description: "info@geohospitalengineering.com",
    icon: Mail,
  },
  {
    title: "Working Hours",
    description: "Mon - Sat : 9:00 AM - 6:00 PM",
    icon: Clock3,
  },
];
const ContactInfo = () => {
  return (
    <section className="py-16">
      {" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {" "}
          {contactCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {" "}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  {" "}
                  <Icon className="h-6 w-6" />{" "}
                </div>{" "}
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {" "}
                  {item.title}{" "}
                </h3>{" "}
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {" "}
                  {item.description}{" "}
                </p>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default ContactInfo;
