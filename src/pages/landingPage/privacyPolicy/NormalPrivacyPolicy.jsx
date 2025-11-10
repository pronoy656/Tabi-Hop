import React from 'react';
import { Shield, Eye, Lock, UserCheck, Mail, Calendar } from 'lucide-react';
import Card, {
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

const NormalPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-emerald-50 to-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 text-balance">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              At ClipFrame, we're committed to protecting your privacy and being
              transparent about how we handle your data. This policy explains
              our practices in clear, simple terms.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Effective Date: [Insert Date]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {/* Information We Collect */}
        <Card className="border-l-4 border-l-emerald-500 border-gray-200 bg-white p-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <Eye className="w-5 h-5 text-emerald-600" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              When you connect your Facebook account to ClipFrame, we may
              collect the following information:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Facebook Pages
                </h4>
                <p className="text-sm text-gray-600">
                  A list of Pages you manage to enable scheduling and content
                  management.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Access Tokens
                </h4>
                <p className="text-sm text-gray-600">
                  Tokens required to perform authorized actions on your Pages.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg md:col-span-2">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Basic Account Information
                </h4>
                <p className="text-sm text-gray-600">
                  Limited profile information necessary to use the app's
                  features.
                </p>
              </div>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm font-medium text-gray-900">
                <strong>Important:</strong> We do not access private messages,
                unrelated account information, or any sensitive personal data
                beyond what is required for app functionality.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Your Information */}
        <Card className="border-l-4 border-l-teal-500 border-gray-200 bg-white p-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <UserCheck className="w-5 h-5 text-teal-600" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              The information collected is used solely for the following
              purposes:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  Displaying Pages you manage within ClipFrame.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  Allowing you to schedule and manage posts on your Pages.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  Enhancing the user experience and improving app functionality.
                </span>
              </li>
            </ul>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <p className="text-sm font-medium text-gray-900">
                We do not sell, share, or disclose your data to third parties
                outside of necessary operations.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="border-l-4 border-l-blue-500 border-gray-200 bg-white p-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-900">
              <Lock className="w-5 h-5 text-blue-600" />
              Data Retention
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  Access tokens and account-related information are stored
                  securely.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  You may revoke ClipFrame's access to your Facebook account at
                  any time via Facebook settings.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-900">
                  Upon disconnection, all tokens and related data stored by
                  ClipFrame will be deleted.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* User Rights & Security */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-gray-200 bg-white p-5">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600 text-sm mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-900">
                    Request deletion of any personal data stored by ClipFrame.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-900">
                    Disconnect your Facebook account to immediately revoke
                    access.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white p-5">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                ClipFrame employs appropriate technical and administrative
                measures to protect user data, including encryption and secure
                storage practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Updates & Contact */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-gray-200 bg-white p-5">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">
                Policy Updates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                We may update this Privacy Policy from time to time. Any updates
                will be posted on this page, and the revised policy will become
                effective immediately upon posting.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white p-5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-gray-900">
                <Mail className="w-4 h-4" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">
                If you have any questions or concerns regarding this Privacy
                Policy, please contact us at:
              </p>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  web.mohosin@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Questions About Your Privacy?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help. Reach out to us anytime if you need
              clarification about how we handle your data.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalPrivacyPolicy;
