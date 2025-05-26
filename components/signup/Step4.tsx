import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface Step4Props {
  onBack: () => void;
  email: string;
  cName: string;
  address: string;
}

const Step4 = ({ onBack, email, cName, address }: Step4Props) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: `Welcome, ${cName}! Your account has been successfully created.`,
    });
    // In a real app, you would submit the form data to your backend here
  };

  return (
    <form onSubmit={handleSubmit} className="form-step space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Almost there!</h2>
        <p className="text-sm text-gray-500">Review your information</p>
      </div>

      <div className="space-y-2 bg-gray-50 p-4 rounded-md">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-gray-500">Email:</span>
          <span>{email}</span>
          <span className="text-gray-500">Name:</span>
          <span>{cName}</span>
          <span className="text-gray-500">Address:</span>
          <span>{address}</span>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="terms" required />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the terms and conditions
          </Label>
          <p className="text-xs text-muted-foreground">
            By checking this box, you agree to our{" "}
            <a href="#" className="text-green-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-green-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button type="button" variant="outline" onClick={onBack} className="w-1/2">
          Back
        </Button>
        <Button type="submit" className="w-1/2 bg-green-500 hover:bg-green-600">
          Create Account
        </Button>
      </div>
    </form>
  );
};

export default Step4;
