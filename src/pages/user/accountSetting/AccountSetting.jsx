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

      <div className="bg-[#eaf7f9] p-6 rounded-md   space-y-4">
        {/* Profile Info Row */}
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm border border-gray-300">
          <div className="flex items-center gap-4">
            <div className="relative ">
              {" "}
              <img
                src="/user.png"
                alt="User Avatar"
                className="w-16 h-16 rounded-full object-cover "
              />{" "}
              <div className="absolute  right-0 bottom-0 rounded-full p-1 shadow bg-white">
                <img className="text-gray-600 " src="/edit-2.png" alt="" />
              </div>{" "}
            </div>
            <div>
              <p className=" text-gray-800 text-base font-medium ">Your name</p>
              <p className="text-gray-500 text-base font-medium">
                yourname@gmail.com
              </p>
            </div>
          </div>
          <Link to={'/account-setting/edit-details'} className="bg-[#27C4CE] hover:bg-[#20b6c0] text-white px-4 py-2 text-sm font-medium rounded-md">
            Edit Details
          </Link>
        </div>

        {/* Settings Links */}
        {settingsItems.map(({ label, to }, idx) => (
          <Link
            key={idx}
            to={to}
            className="flex justify-between items-center bg-white px-4 py-4 rounded-md shadow-sm  font-medium text-gray-800 hover:bg-gray-100 transition border border-gray-300"
          >
            {label}
            <span className=" text-gray-800 text-lg font-medium ">&gt;</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountSetting;
