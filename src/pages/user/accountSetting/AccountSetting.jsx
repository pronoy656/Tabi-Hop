import { Link } from "react-router-dom";
import SectionHeader from "../../../components/shared/SectionHeader";

const AccountSetting = () => {
  const settingsItems = [
    { label: "Change Password", to: "/account/change-password" },
    { label: "Terms and Conditions", to: "/account/terms" },
    { label: "Privacy Policy", to: "/account/privacy" },
    { label: "Frequently Asked Questions", to: "/account/faq" },
    { label: "Contact Support", to: "/account/support" },
  ];

  return (
    <div className="page">
      <div>
        <SectionHeader
          title="Account Settings"
          subtitle="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
      </div>

      <div className="bg-[#eaf7f9] p-6 rounded-md max-w-3xl mx-auto space-y-4 border">
        {/* Profile Info Row */}
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src="/user.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <p className="text-sm font-semibold">Your name</p>
              <p className="text-sm text-gray-500">yourname@gmail.com</p>
            </div>
          </div>
          <button className="bg-[#27C4CE] hover:bg-[#20b6c0] text-white px-4 py-2 text-sm font-medium rounded-md">
            Edit Details
          </button>
        </div>

        {/* Settings Links */}
        {settingsItems.map(({ label, to }, idx) => (
          <Link
            key={idx}
            to={to}
            className="flex justify-between items-center bg-white px-4 py-4 rounded-md shadow-sm text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            {label}
            <span className="text-gray-400">&gt;</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountSetting;



