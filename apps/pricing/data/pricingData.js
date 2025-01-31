// Icons
export const icons = {
  tic: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      className="text-green-600"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
      ></path>
    </svg>
  ),
  thunder: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.836 6l.76-2.027L9.336 2H5.5a.72.72 0 0 0-.664.45L2.513 8.257a.177.177 0 0 0 .164.243h4.965l-.732 2.013l-1.082 2.975a.382.382 0 0 0 .637.392l6.956-7.391A.29.29 0 0 0 13.21 6H7.835"
      ></path>
    </svg>
  ),
  stack: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 6l-8 4l8 4l8-4zm-8 8l8 4l8-4"
      ></path>
    </svg>
  ),
  largeStack: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M234.36 170a12 12 0 0 1-4.36 16.37l-96 56a12 12 0 0 1-12.1 0l-96-56a12 12 0 0 1 12.09-20.74l90 52.48L218 165.63a12 12 0 0 1 16.36 4.37M218 117.63l-90 52.48l-89.95-52.48A12 12 0 0 0 26 138.37l96 56a12 12 0 0 0 12.1 0l96-56a12 12 0 0 0-12.1-20.74M20 80a12 12 0 0 1 6-10.37l96-56a12.06 12.06 0 0 1 12.1 0l96 56a12 12 0 0 1 0 20.74l-96 56a12 12 0 0 1-12.1 0l-96-56A12 12 0 0 1 20 80m35.82 0L128 122.11L200.18 80L128 37.89Z"
      ></path>
    </svg>
  ),
};

export const pricingData = [
  {
    title: "Pay As You Go",
    price: "10%",
    description: "10% from your customer payment",
    features: [
      "Only pre-paid booking",
      "Both practitioner and Organization",
      "Up to 5 practitioners in organization",
      "2 staff members are allowed",
      "Basic chat and email support",
    ],
    icon: icons.thunder,
  },
  {
    title: "Practitioner",
    price: "$49",
    description: "1 practitioner license/monthly",
    features: [
      "All booking options",
      "All schedule Feature",
      "Individual single practitioner license",
      "3 staff members are allowed",
      "Unlimited email marketing",
    ],
    icon: icons.stack,
  },
  {
    title: "Enterprise",
    price: "$39",
    description: "Practitioner Number",
    features: [
      "All booking options",
      "Only for Organization",
      "Unlimited practitioners and staff",
      "Customizable 6 page website",
      "E-commerce functionality",
    ],
    icon: icons.largeStack,
  },
];
