import { HiArrowLeft } from "react-icons/hi";
import Button from "./Button";

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-8">
        {/* 404 Header */}
        <h1 className="text-9xl font-bold text-gray-800">404</h1>

        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-gray-700">
            Page Not Found
          </h2>
          <p className="text-gray-500 max-w-md">
            Sorry, we couldn't find the page you're looking for. Please check
            the URL or return to the previous page.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to previous page
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
