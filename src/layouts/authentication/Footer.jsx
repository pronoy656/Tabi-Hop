import {
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const Footer = () => {
  return (
    <div className="bg-[#6E67D5] text-white px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 max-w-7xl mx-auto">
        {/* Logo & Socials */}
        <div className="md:col-span-1 flex flex-col items-start">
          <img
            src="/logo_image.png"
            alt="Logo"
            className="w-[140px] h-[109px]"
          />
          <img
            src="/logo_name.png"
            alt="Logo Text"
            className="w-[140px] h-[34px] mt-2"
          />

          <div className="mt-6 space-y-3 text-white text-[16px] font-medium">
            <div className="flex items-center gap-2">
              <TwitterOutlined />
              <span>Formal Twitter</span>
            </div>
            <div className="flex items-center gap-2">
              <InstagramOutlined />
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <YoutubeOutlined />
              <span>Youtube</span>
            </div>
            <div className="flex items-center gap-2">
              <LinkedinOutlined />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="text-lg font-bold mb-4">Company</p>
          <ul className="space-y-2 text-[16px] font-medium">
            <li>About us</li>
            <li>Careers</li>
            <li>Join team</li>
            <li>Security</li>
            <li>Status</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Download */}
        <div>
          <p className="text-lg font-bold mb-4">Download</p>
          <ul className="space-y-2 text-[16px] font-medium">
            <li>iOS & Android</li>
            <li>Mac & Windows</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="text-lg font-bold mb-4">Resources</p>
          <ul className="space-y-2 text-[16px] font-medium">
            <li>Help Center</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Community</li>
            <li>Integrations</li>
            <li>Templates</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* TabiHop for */}
        <div>
          <p className="text-lg font-bold mb-4">TabiHop for</p>
          <ul className="space-y-2 text-[16px] font-medium">
            <li>Enterprise</li>
            <li>Small Business</li>
            <li>Personal</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-lg font-bold mb-4">Office Address</p>
          <p className="text-[16px] font-medium mb-4">
            123 Anyway St. Any city State
          </p>
          <p className="text-lg font-bold mb-2">Email Address</p>
          <p className="text-[16px] font-medium mb-4">cyberbunny@gmail.com</p>
          <p className="text-lg font-bold mb-2">Phone number</p>
          <p className="text-[16px] font-medium">+145 545 6566</p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-white text-xl font-semibold mt-10 border-t border-white/20 pt-6">
        © 2025 TabiHop, Inc
      </div>
    </div>
  );
};

export default Footer;
