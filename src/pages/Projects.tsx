import Card from "@/components/Card/Card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Projects = () => {
  return (
    <div>
      <div id="projects_page_container">
        <Card isLeft isRow isCenter>
          <div className="flex-grow">
            <a href="https://zapread.online" target="_blank">
              <h2 className="heading">ZapRead</h2>
            </a>
            <p>
              ZapRead is an AI-powered reading practice tool that helps you improve your comprehension with interactive challenges. Whether you’re reading academic texts, programming docs, or general content, ZapRead turns reading into an active,
              skill-building experience — personalized, trackable, and fun.
            </p>
          </div>
          <div className="center flex-shrink">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <img src="/zap1.png" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Card>
        <Card isRow isCenter>
          <div className="flex-grow">
            <a href="/" target="_blank">
              <h2 className="heading">Invoiceer (Coming Soon)</h2>
            </a>
            <p>
              Invoiceer helps you create professional invoices and quotes with ease. Customize themes, save client details, and send documents as PDFs or emails — instantly or on a schedule. Track payments and get notified when invoices are due or
              overdue. With support for taxes, discounts, recurring billing, and exportable reports, Invoiceer keeps your invoicing fast, organized, and stress-free.
            </p>
          </div>
          <div className="center flex-shrink">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <img src="/invoiceer.png" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Card>
        <Card isLeft isRow isCenter>
          <div className="flex-grow">
            <a href="https://ase-2024-group-c.vercel.app/" target="_blank">
              <h2 className="heading">Recipe Rush (Team Lead)</h2>
            </a>
            <p>
              Recipe Rush is a full-stack recipe book app built by my students, featuring login/authentication, voice commands, text-to-speech, advanced search and sort, a shopping cart, favorites, and full PWA support. As team lead and mentor, I
              guided them through the entire development process — from planning and feature design to debugging and deployment — helping them grow their skills while bringing the project to life.
            </p>
          </div>
          <div className="center flex-shrink">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <img src="/recipe.png" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
