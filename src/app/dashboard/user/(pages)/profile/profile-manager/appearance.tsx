import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function Appearance() {
  return (
    <div className="w-full  space-y-4 p-4">
      {/* Layout Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm font-medium">
            Layout
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
              Required
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="split" className="grid grid-cols-3 gap-4">
            <Label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-muted p-4 hover:bg-accent [&:has(:checked)]:border-primary">
              <RadioGroupItem value="split" className="sr-only" />
              <div className="h-12 w-12 rounded border-2" />
              <span className="mt-2 text-xs">Split Layout</span>
            </Label>
            <Label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-muted p-4 hover:bg-accent [&:has(:checked)]:border-primary">
              <RadioGroupItem value="full" className="sr-only" />
              <div className="h-12 w-12 rounded border-2" />
              <span className="mt-2 text-xs">Full Layout</span>
            </Label>
            <Label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-muted p-4 hover:bg-accent [&:has(:checked)]:border-primary">
              <RadioGroupItem value="background" className="sr-only" />
              <div className="h-12 w-12 rounded border-2" />
              <span className="mt-2 text-xs">Background</span>
            </Label>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Text Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm font-medium">
            Text
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
              Required
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter your title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondary">Secondary Text</Label>
            <Input id="secondary" placeholder="Enter secondary text" />
          </div>
        </CardContent>
      </Card>

      {/* Background Style Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm font-medium">
            Background Style
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
              Required
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch id="background" />
            <Label htmlFor="background">Enable custom background</Label>
          </div>
        </CardContent>
      </Card>

      {/* Buttons Style Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm font-medium">
            Buttons Style
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
              Required
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-24">
              Custom layout
            </Button>
            <Button variant="outline" className="h-24">
              Custom layout
            </Button>
            <Button variant="outline" className="h-24">
              Custom layout
            </Button>
            <Button variant="outline" className="h-24">
              Custom layout
            </Button>
          </div>
          <div className="space-y-2">
            <Label>Button Color</Label>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-md bg-muted" />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Button Text Color</Label>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-md bg-muted" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logo Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm font-medium">
            Logo
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
              Required
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed">
              Logo
            </div>
            <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed">
              Logo
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Branding Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm font-medium">
            Branding
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
              Required
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch id="branding" />
            <Label htmlFor="branding">Enable branding</Label>
          </div>
        </CardContent>
      </Card>

      {/* Language Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-sm font-medium">
            Language
            <span className="ml-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
              Required
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select defaultValue="en">
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
}
