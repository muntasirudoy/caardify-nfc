import {
  Mail,
  MessageCircle,
  ExternalLink,
  Wallet,
  Download,
  QrCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="relative">
        {/* Background gradient */}
        <div className="h-48 rounded-t-2xl bg-gradient-to-br from-blue-200 via-purple-200 to-cyan-200" />

        {/* Profile avatar */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-semibold">
            MU
          </div>
        </div>
      </div>

      {/* Profile info */}
      <div className="mt-16 text-center">
        <h1 className="text-2xl font-bold">Muntasir Udoy</h1>
        <p className="text-muted-foreground mt-1">ns</p>
        <div className="flex items-center justify-center gap-2 mt-1 text-muted-foreground">
          <span>Dhaka</span>
          <span>•</span>
          <span>snf</span>
        </div>
      </div>

      {/* Edit Profile Button */}
      <Button className="w-full mt-6" variant="default">
        Edit Profile
      </Button>

      {/* Share Section */}
      <Card className="mt-8">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <QrCode className="w-5 h-5" />
              <h2 className="text-xl font-bold">Share your profile</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            Explore how you can share your profile
          </p>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start gap-3">
              <MessageCircle className="w-5 h-5" />
              Share via SMS
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3">
              <Mail className="w-5 h-5" />
              Share via Email
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3">
              <ExternalLink className="w-5 h-5" />
              View Profile
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3">
              <Wallet className="w-5 h-5" />
              Add to my wallet
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3">
              <Download className="w-5 h-5" />
              Download the App
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
