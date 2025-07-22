"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GripVertical,
  Link,
  Link2,
  Mail,
  Paintbrush,
  User,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";
import ManageAbout from "./about";
import Appearance from "./appearance";

interface ContactInfo {
  id: string;
  type: "personal" | "work";
  value: string;
}

export default function ProfileEditor() {
  const [title, setTitle] = useState("");
  const [contacts, setContacts] = useState<ContactInfo[]>([
    { id: "1", type: "personal", value: "muntasir.u@coppanet.com" },
    { id: "2", type: "work", value: "asdasda@gmail.com" },
  ]);

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Content</h1>
          <p className="text-muted-foreground">
            Add sections to personalize your profile.
          </p>
        </div>

        <Tabs defaultValue="content" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="content"
              className="data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
            >
              <Link2 className="mr-2 h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
            >
              <User className="mr-2 h-4 w-4" />
              About
            </TabsTrigger>
            <TabsTrigger
              value="appearance"
              className="data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
            >
              <Paintbrush className="mr-2 h-4 w-4" />
              Appearance
            </TabsTrigger>

            <TabsTrigger
              value="wallet"
              className="data-[state=active]:border-primary data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Wallet
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <Button
              className="w-full bg-primary text-primary-foreground"
              size="lg"
            >
              Add Content
            </Button>

            <div className="border rounded-lg p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Contact Info</h2>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="text-sm font-medium">
                    Title
                  </label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Contact Info</label>
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="flex items-center gap-2 p-3 border rounded-lg group"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="cursor-move"
                      >
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Mail className="h-4 w-4 text-primary" />
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">
                          {contact.type === "personal"
                            ? "Personal Email"
                            : "Work Email"}
                        </div>
                        <div>{contact.value}</div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Link className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteContact(contact.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  Add Email or Phone
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="about" className="space-y-6">
            <ManageAbout />
          </TabsContent>
          <TabsContent value="appearance" className="space-y-6">
            <Appearance />
          </TabsContent>
        </Tabs>
      </div>

      <div className="lg:w-[400px]">
        <Card>
          <CardContent className="p-6 space-y-8 ">
            <div className="text-center space-y-2">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full mx-auto flex items-center justify-center text-3xl font-semibold">
                MU
              </div>
              <h2 className="text-xl font-semibold">Muntasir Udoy</h2>
              <div className="text-sm text-muted-foreground">ns</div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span>Dhaka</span>
                <span>•</span>
                <span>snf</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Exchange Contact
            </Button>

            <div className="space-y-2">
              <Button variant="secondary" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">
                    Personal Email
                  </div>
                  <div className="text-sm">muntasir.u@coppanet.com</div>
                </div>
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">
                    Work Email
                  </div>
                  <div className="text-sm">asdasda@gmail.com</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
