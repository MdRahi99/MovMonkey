import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DeliveryDriverJobPostSuccess() {
  return (
    <div className="flex items-center justify-center px-5 sm:min-h-[calc(100vh-70px)]">
      <div className="max-sm:my-20">
        <div className=" max-w-2xl rounded-3xl bg-secondary px-5 py-6 text-center text-white sm:px-20 sm:py-10">
          <h3 className="mb-3 text-2xl font-semibold">Confirmation</h3>
          <p>Your Job has been Submitted!</p>
          <p className="hidden sm:block">
            Watch the notification panel for updates in the next few hours.
          </p>

          <div className="mt-5">
            <Link href="/create-job">
              <Button className="bg-white px-14 font-medium text-secondary hover:bg-white hover:text-secondary">
                Close
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
