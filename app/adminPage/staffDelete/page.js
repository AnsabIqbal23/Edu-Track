'use client';
import { useState } from 'react';
import { AlertCircle, Trash2 } from 'lucide-react';
import AdminSidebar from "@/components/admin/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

// This would typically come from your backend or state management
const mockStaffMembers = [
  { id: '1', name: 'John Doe', role: 'teacher' },
  { id: '2', name: 'Jane Smith', role: 'librarian' },
  { id: '3', name: 'Bob Johnson', role: 'teacher' },
];

const StaffDeleteFormComponent = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const handleStaffSelect = (staffId) => {
    const staff = mockStaffMembers.find(s => s.id === staffId);
    setSelectedStaff(staff || null);
    setDeleteError(null);
  };

  const handleDelete = async () => {
    if (!selectedStaff) return;

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log(`Deleted staff member: ${selectedStaff.name}`);
      setIsDeleteDialogOpen(false);
      setSelectedStaff(null);
    } catch (error) {
      setDeleteError('An error occurred while deleting the staff member. Please try again.');
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="grid grid-cols-[auto_1fr]">
          <AdminSidebar />
          <main className="p-8">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Delete Staff Member</CardTitle>
                  <CardDescription className="text-gray-400">Remove a teacher or librarian from the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="staffSelect">Select Staff Member</Label>
                      <Select onValueChange={handleStaffSelect}>
                        <SelectTrigger id="staffSelect">
                          <SelectValue placeholder="Select a staff member" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {mockStaffMembers.map((staff) => (
                              <SelectItem key={staff.id} value={staff.id}>
                                {staff.name} ({staff.role})
                              </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {deleteError && (
                      <Alert variant="destructive" className="mt-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{deleteError}</AlertDescription>
                      </Alert>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                          variant="destructive"
                          disabled={!selectedStaff}
                          onClick={() => setIsDeleteDialogOpen(true)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Staff Member
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure you want to delete this staff member?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete the account of {selectedStaff?.name} ({selectedStaff?.role}) and remove their data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleDelete}>
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </div>
  );
}

export default StaffDeleteFormComponent;