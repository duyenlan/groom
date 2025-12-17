import fs from "fs";
import path from "path";
import MarkdownContent from "@/components/MarkdownContent";

export default function Docs() {
  // 读取 README.md 文件内容
  const readmePath = path.join(process.cwd(), "README.md");
  const content = fs.readFileSync(readmePath, "utf8");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Documentation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to know about SEO Next.js Starter
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <MarkdownContent content={content} />
          </div>
        </div>
      </section>
    </main>
  );
}
