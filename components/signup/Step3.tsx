import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
  cName: string;
  setCName: (cName: string) => void;
  address: string;
  setAddress: (address: string) => void;
}

const Step3 = ({ onNext, onBack, cName, setCName, address, setAddress }: Step3Props) => {
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleNext} className="form-step space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">Your Information</h2>
        <p className="text-sm text-gray-500">Tell us a bit about yourself</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cName">Name of Cooperative</Label>
        <Input
          id="cName"
          type="text"
          value={cName}
          onChange={(e) => setCName(e.target.value)}
          required
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="w-full"
        />
      </div>

      <div className="flex space-x-2">
        <Button type="button" variant="outline" onClick={onBack} className="w-1/2">
          Back
        </Button>
        <Button type="submit" className="w-1/2 bg-green-500 hover:bg-green-600">
          Continuedddddd
        </Button>
      </div>
    </form>
  );
};

export default Step3;
