// Import necessary modules
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center text-indigo-300 py-3">
      {/* GitHub */}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.links.github}
        passHref
      >
        <FaGithub size={24} />
      </Link>

      {/* LinkedIn */}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.links.linkedin}
        passHref
      >
        <FaLinkedin size={24} />
      </Link>

      {/* Medium */}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.links.medium}
        passHref
      >
        <FaMedium size={24} />
      </Link>

      {/* Resume */}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={siteConfig.links.resume}
        passHref
      >
        <HiDocumentText size={24} />
      </Link>
    </div>
  );
};

export default SocialLinks;
