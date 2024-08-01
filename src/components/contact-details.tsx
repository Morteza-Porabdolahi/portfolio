import Title from "./ui/title";

export default function ContactDetails() {
  return (
    <div>
      <Title className="mt-20" text={["Contact", "Details"]} />
      <ul className="flex flex-col gap-4">
        <li>
          <span className="uppercase mb-4 block text-gray-500">email</span>
          <span className="ml-2 text-gray-400">mortezaporabdolahi@gmail.com</span>
        </li>
        <li>
          <span className="uppercase mb-4 block text-gray-500">phone</span>
          <span className="ml-2 text-gray-400">+98 9146757492</span>
        </li>
      </ul>
    </div>
  )
}

