import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

export default function ManageAbout() {
  return (
    <div className=" mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">About</h1>
      <p className="text-muted-foreground mb-4">
        Update your photo, background, job title, company, and location.
      </p>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
          <p className="text-sm text-muted-foreground">
            Upload a profile picture to display on your page.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Upload an image with a maximum size of 10 MB
            </p>
            <Button variant="outline" size="icon">
              <Upload className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Background</CardTitle>
          <p className="text-sm text-muted-foreground">
            Recommended aspect ratio is 2560x1080px with a maximum size of 10 MB
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload Background
            </Button>
            <div className="w-24 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-md"></div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>About</CardTitle>
          <p className="text-sm text-muted-foreground">
            Update your public contact information showed on your profile.
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="jobTitle" className="text-sm font-medium">
                Job Title
              </label>
              <Input id="jobTitle" placeholder="Enter your job title" />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
              <Input id="company" placeholder="Enter your company name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">
                Location
              </label>
              <Input id="location" placeholder="Enter your location" />
            </div>
            <Button>Save changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
