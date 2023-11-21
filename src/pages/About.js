import { useTitle } from "../utils/useTitle";

export const About = ({ apiPath, title }) => {
  console.log(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <div className="max-w-lg">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This toy project was develop in base to the Packpublsihing course
              "React JS Masterclass - Go From Zero To Job Ready" by Shubham
              Sarda.
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              For more details, please see{" "}
              <a href="https://www.packtpub.com/">https://www.packtpub.com/</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
