

import AdminAccountTab from "./AdminAccountTab";



const AdminAccountSettings = () => {
  return (
    <div className="admin-page">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-[#2c3e57]">Account Settings</h2>
          <p className="text-gray-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
  
    
     
      </div>

      {/* Tabs */}
      <div className="rounded-xl border border-black/10 lg:p-4 p-2 shadow">
   <AdminAccountTab/></div>
    </div>
  );
};

export default AdminAccountSettings;
