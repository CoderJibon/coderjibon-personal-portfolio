import BGBox from "@/components/BGBox/BGBox";
import MainLayout from "../MainLayout";

function shopifyPage() {
  return (
    <>
      <MainLayout>
        <div className="p-6 container mx-auto max-w-5xl text-gray-100 dark:text-success">
          <h2 className="text-3xl font-bold mb-4 text-darkyellow dark:text-primary">
            Shopify Expert
          </h2>
          <p className="text-lg mb-4">
            As a <span className="font-semibold">Shopify expert</span>, I
            specialize in creating and customizing online stores that deliver
            exceptional shopping experiences. My skills encompass:
          </p>

          <ul className="list-disc list-inside mb-6 text-lg">
            <li className="mb-2">
              <span className="font-semibold">HTML & CSS:</span> Crafting clean,
              semantic markup and styling for responsive, visually appealing
              designs that enhance user experience.
            </li>
            <li className="mb-2">
              <span className="font-semibold">JavaScript & jQuery:</span>{" "}
              Implementing interactive features and dynamic content to engage
              users and improve functionality on Shopify stores.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Shopify Liquid:</span> Utilizing
              Shopify’s templating language to customize themes and create
              unique page layouts that reflect brand identity.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Theme Customization:</span>{" "}
              Tailoring Shopify themes to align with business goals and ensuring
              seamless navigation.
            </li>
            <li className="mb-2">
              <span className="font-semibold">App Integration:</span> Leveraging
              Shopify apps to enhance functionality, streamline operations, and
              boost sales.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Section Development:</span>{" "}
              Creating unique sections within Shopify stores to showcase
              products effectively and drive customer engagement.
            </li>
            <li>
              <span className="font-semibold">Performance Optimization:</span>{" "}
              Implementing best practices to enhance website speed and ensure a
              smooth checkout process, ultimately improving conversion rates.
            </li>
          </ul>

          <p className="text-lg mb-6">
            With a focus on both aesthetics and functionality, I am dedicated to
            helping businesses establish a strong online presence through
            well-designed and highly effective Shopify stores.
          </p>
          <p className="text-lg mt-6">
            📧 <span className="font-semibold">Email:</span>{" "}
            contact.engjibon@gmail.com
            <br />
            🌐 <span className="font-semibold">Linkedin:</span>{" "}
            <a
              href="https://www.linkedin.com/in/coderjibon/"
              className="text-darkyellow dark:text-primary underline"
            >
              Profile
            </a>
          </p>
        </div>
      </MainLayout>
      <BGBox>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64 md:h-96" // Responsive height for smaller and larger screens
              src="https://www.youtube.com/embed/Gg0Y7YOTMIg?si=9bzoLC86xm1tKwv-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </BGBox>
    </>
  );
}

export default shopifyPage;
