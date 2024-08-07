import "./components-global.css";
import OrbitingCircles from "./orbiting-info";
import VibratingBackground from "./vibrating-background";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly rounded-lg border bg-background md:shadow-xl pb-5" id="about-section">
      <div className="relative flex w-full flex-col items-center justify-center pb-5">
        <h2 className="w-fit pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-black h-fit">
          About
        </h2>
        <span className="pointer-events-none whitespace-pre-wrap z-100">
          <img
            src="Images\about-img-removebg-preview.jpeg"
            alt="Profile Pic"
            className="relative mt-3 md:mt-8 lg:mt-10 z-9"
          />
        </span>
        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent -z-10 top-auto"
          duration={20}
          delay={20}
          radius={80}
        >
          <Icons.javaScript />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent -z-10 top-auto"
          duration={20}
          delay={10}
          radius={80}
        >
          <Icons.python />
        </OrbitingCircles>
        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="size-[70px] border-none bg-transparent -z-10 top-auto"
          radius={190}
          duration={20}
          reverse
        >
          <Icons.java />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent -z-10 top-auto"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <Icons.gitHub />
        </OrbitingCircles>

        {/* <div className="background-container">
            <VibratingBackground
              movementX={20}
            ></VibratingBackground>
          </div> */}
      </div>

      {/* <div className="relative md:w-2/3 text-left p-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae mollitia doloribus reprehenderit itaque sequi tempore maxime pariatur. Soluta, eveniet, officiis commodi adipisci est amet repellat assumenda molestias perferendis quia consequatur possimus atque voluptates esse omnis pariatur? Ad qui voluptatum et, minima, deserunt labore quisquam, quidem rem quasi veritatis nam tempore consequatur. Voluptatem, voluptatum eos a quae sequi ipsum consequatur cum numquam autem necessitatibus? Libero, voluptatibus cum? Saepe, nihil dolorum eos neque veniam aperiam harum porro rerum. Asperiores libero illum voluptates ipsum consectetur expedita possimus voluptatem dolor obcaecati adipisci? Error ipsa similique eaque eum reprehenderit neque, deserunt dolores ipsam quo!</p>
      </div> */}
    </div>
  );
};

const Icons = {
  gitHub: () => (
    <svg width="100" height="100" viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  java: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 32 32"
    >
      <path
        d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z"
        fill="#4e7896"
      />
      <path
        d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z"
        fill="#f58219"
      />
    </svg>
  ),
  python: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 32 32"
    >
      <defs>
        <linearGradient
          id="A"
          x1="811.527"
          y1="574.895"
          x2="665.255"
          y2="573.732"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#366a96" />
          <stop offset="1" stopColor="#3679b0" />
        </linearGradient>
        <linearGradient
          id="B"
          x1="862.824"
          y1="642.176"
          x2="573.276"
          y2="642.176"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffc836" />
          <stop offset="1" stopColor="#ffe873" />
        </linearGradient>
      </defs>
      <g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)">
        <path
          d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z"
          fill="url(#A)"
        />
        <path
          d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z"
          fill="url(#B)"
        />
        <path
          d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z"
          fill="#fff"
        />
      </g>
    </svg>
  ),
  javaScript: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="2500"
      viewBox="0 0 1052 1052"
    >
      <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
      <path
        d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
        fill="#323330"
      />
    </svg>
  ),
};

export default AboutSection;
