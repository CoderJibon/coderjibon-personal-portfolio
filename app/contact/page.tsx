import ContactFrom from "@/components/ContactFrom/ContactFrom";
import MainLayout from "../MainLayout";

function ContactPage() {
  return (
    <>
      <MainLayout>
        <h2 className="text-2xl text-center sm:text-3xl mb-7 text-color dark:dark-text-color font-semibold ">
          Get in Touch with Me!
        </h2>
        <p className="text-base text-justify mb-5">
          Have a project in mind or a question? {"I’d"} love to hear from you!
          Whether {"you’re"} looking to bring an idea to life or need expert
          guidance on your next big move, feel free to reach out. {"Let’s "}
          connect and explore how we can work together to achieve something
          amazing. Simply fill out the form below, and {"I’ll"} get back to you
          as soon as possible.
        </p>
        <ContactFrom />
      </MainLayout>
    </>
  );
}

export default ContactPage;
