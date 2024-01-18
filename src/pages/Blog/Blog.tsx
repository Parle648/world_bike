import BlogHero from "../../widgets/BlogHeroSection/BlogHeroSection";
import Footer from "../../widgets/Footer/Footer";
import Newsletter from "../../widgets/Newsletter/Newsletter";
import TopHeader from "../../widgets/TopHeader/TopHeader";
import BlogArticle from "../../widgets/BlogMainSection/BlogMainSection.tsx";

const Blog = () => {
    return (
        <div>
            <TopHeader />
            <BlogHero />
            <BlogArticle />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Blog;