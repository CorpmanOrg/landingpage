import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
}

const Step2 = ({ onNext, onBack, password, setPassword, confirmPassword, setConfirmPassword }: Step2Props) => {
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleNext} className="form-step space-y-4">
      <div className="space-y-1]">
        <h2 className="text-xl font-semibold">Create a password</h2>
        <p className="text-sm text-gray-500">Choose a secure password for your account</p>
      </div>

      <div className="">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full"
        />
      </div>

      <div className="">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full"
        />
        {password !== confirmPassword && password && confirmPassword && (
          <p className="text-sm text-red-500">Passwords do not match</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Button type="button" variant="outline" onClick={onBack} className="w-1/2">
          Back
        </Button>
        <Button
          type="submit"
          className="w-1/2 bg-green-500 hover:bg-green-600"
          disabled={!password || password !== confirmPassword}
        >
          Continue
        </Button>
      </div>
    </form>
  );
};

export default Step2;
