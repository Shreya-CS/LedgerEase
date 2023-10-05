import Header from "../../components/Header"
import HeaderImage from '../../images/interest-loan-calculator.svg'
import StoryImage from '../../images/interest-loan-calculator.svg'
import VisionImage from '../../images/business-accounting.svg'
import MissionImage from '../../images/woman-checking-invoice.svg'
import './about.css'
const about = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus in vel illum consequatur neque dignissimos fuga, recusandae reprehenderit
            </Header>
            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, qui quaerat. Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, qui quaerat. Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, in.Ullam libero quasi sed obcaecati, commodi modi omnis magni, reiciendis possimus perspiciatis iure ea, sapiente excepturi iste neque itaque!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rerum similique vel sed sint numquam!Possimus, in.Ullam libero quasi sed obcaecati</p>
                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>With advanced OCR technology, we extract essential fields from invoices, converting unstructured data into organized, structured records. What sets us apart is our integration of blockchain, providing a tamper-proof and immutable ledger of transactions. This ensures the highest level of data integrity, prevents fraud, and fosters trust in your financial dealings.</p>
                        <p>The company's system is designed to identify and extract crucial information from invoices. These essential fields typically include details such as invoice number, date, amounts, vendor information, and line items. By automating this process, businesses can save time and reduce the risk of manual data entry errors.
                        </p>
                        <p> We are not only interested in just improving or optimizing financial management for SMEs; we want to revolutionize it.</p>
                        {/*<p>The target audience for us are small and medium-sized businesses. These are businesses that are smaller than large corporations but play a crucial role in the economy.</p> */}
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Our mission is to revolutionize financial management for small and medium enterprises. Our cutting-edge invoice management system stands out from the crowd with an innovative approach that leverages the power of blockchain technology which enhances security and transparency in financial transactions.</p>
                        <p>The primary objective of this company is to bring about a significant change or revolution in how SMEs handle their finances. SMEs typically face unique challenges in managing their financial operations, and this organization aims to address those challenges.
                        </p>
                        {/* <p> We are not only interested in just improving or optimizing financial management for SMEs; we want to revolutionize it.</p>
                        <p>The target audience for us are small and medium-sized businesses. These are businesses that are smaller than large corporations but play a crucial role in the economy.</p> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default about
