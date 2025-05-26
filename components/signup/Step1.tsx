import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step1Props {
  onNext: () => void;
  email: string;
  setEmail: (email: string) => void;
}

const Step1 = ({ onNext, email, setEmail }: Step1Props) => {
  const myOrigity: string =
    "Proposed Name and Address, objectives, membership rules, by-laws, letter of consent, feasibility study";

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  console.log("Field: ", myOrigity);

  return (
    <form onSubmit={handleNext} className="form-step space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Create your account</h2>
        <p className="text-sm text-gray-500">Enter your email to get started</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
      </div>

      <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
        Continueddddd
      </Button>
    </form>
  );
};

export default Step1;
