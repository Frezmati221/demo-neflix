import React, { useState } from "react";
import styled from "styled-components";
import LayoutFront from "../components/layout/LayoutFront";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 3rem 0;
`;
const slideWidth = 316; // 300px slide width + 16px gap

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
  width: 100%;
`;

const slides = [
  {
    id: 1,
    title: "Digital Art Collection",
    category: "FEATURED",
    description:
      "Explore our curated collection of unique digital artworks from renowned artists around the globe.",
    image:
      "https://img-cdn.magiceden.dev/autoquality:size:1024000:20:80/f:webp/rs:fill:640:640:0:0/plain/https%3A%2F%2Fmedia.cdn.magiceden.dev%2Flaunchpad%2Fupload%2F5f983c07-23c8-48d8-a33b-9eac42bd1d9e",
  },
  {
    id: 2,
    title: "Crypto Collectibles",
    category: "TRENDING",
    description:
      "Limited edition digital collectibles secured on the blockchain. Own a piece of digital history.",
    image:
      "https://img-cdn.magiceden.dev/autoquality:size:1024000:20:80/f:webp/rs:fill:640:640:0:0/plain/https%3A%2F%2Fmedia.cdn.magiceden.dev%2Flaunchpad%2Fupload%2Fa1e10bd5-5b38-4615-a110-e9f6f144a9b3",
  },
  {
    id: 3,
    title: "NFT Showcase",
    category: "NEW",
    description:
      "Discover the latest NFT drops and exclusive digital assets from top creators.",
    image:
      "https://img-cdn.magiceden.dev/autoquality:size:1024000:20:80/f:webp/rs:fill:640:640:0:0/plain/https%3A%2F%2Fbafkreidhabhwtixywp5rsqzt5gi6jhbiso2muem5o2f4fu4dk4aseipnhe.ipfs.nftstorage.link%2F",
  },

  {
    id: 4,
    title: "Bored Ape Yacht Club",
    category: "NEW",
    description:
      "Discover the latest NFT drops and exclusive digital assets from top creators.",
    image:
      "https://img-cdn.magiceden.dev/autoquality:size:1024000:20:80/f:webp/rs:fill:640:640:0:0/plain/https%3A%2F%2Fmedia.cdn.magiceden.dev%2Flaunchpad%2Fupload%2F5b9d6973-33c0-40c0-bf02-b75b82068d65",
  },
  {
    id: 5,
    title: "ApeCoin",
    category: "NEW",
    description:
      "Discover the latest NFT drops and exclusive digital assets from top creators.",
    image:
      "https://img-cdn.magiceden.dev/autoquality:size:1024000:20:80/f:webp/rs:fill:640:640:0:0/plain/https%3A%2F%2Fmedia.cdn.magiceden.dev%2Flaunchpad%2Fupload%2F6c7a8514-3a40-4b6e-9049-b0b80dcce4c3",
  },
];

const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.$translate}px);
  gap: 1rem;
  width: ${slides.length * slideWidth}px;
`;

const Slide = styled.div`
  position: relative;
  flex: 0 0 300px;
  height: 300px;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Slide}:hover & {
    transform: scale(1.05);
  }
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: -70px;
  left: 0;
  right: 0;
  padding: 1rem 1.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const AlwaysVisibleText = styled.div`
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${Slide}:hover & {
    transform: translateY(-100%);
  }
`;

const HoverText = styled.div`
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${Slide}:hover & {
    transform: translateY(-75%);
    opacity: 1;
  }
`;

const SlideTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
`;

const SlideCategory = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 9999px;
  font-size: 0.875rem;
  color: white;
`;

const SlideDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  opacity: 0.9;
  color: white;
`;

const NavButton = styled.button`
  position: absolute;
  top: 45%;
  ${(props) => props.$direction}: -1.5rem;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  border: none;
  background: rgba(21, 44, 91, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    background: rgba(21, 44, 91);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(3, 105, 161, 0.5);
  }
`;
const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: #fff;
  padding: 12px 16px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;
  min-width: min-content;
`;

const ButtonTabs = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: ${(props) => (props.$active ? "#0066FF" : "transparent")};
  color: ${(props) => (props.$active ? "#fff" : "rgb(98, 117, 157)")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  border: 1px solid #ccc;

  &:hover {
    color: ${(props) => (props.$active ? "#fff" : "rgb(98, 117, 157)")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
  }
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TableContainer = styled.div`
  background: linear-gradient(to bottom, #ffffff, #f0f4f8);
  border-radius: 12px;
  padding: 24px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  color: #333;
`;

const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #2c5282;
  font-weight: 600;
  border-bottom: 1px solid #e2e8f0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
  font-family: "DM Sans", sans-serif;
  color: rgb(98, 117, 157);
  font-size: 16px;
`;

const SortButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease;
`;

const Tr = styled.tr`
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(66, 153, 225, 0.1);
  }

  &:first-child ${Td} {
    border-top: none;
  }

  &:last-child ${Td} {
    border-bottom: none;
  }
`;

const CollectionCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const BoostBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  background: linear-gradient(45deg, #4299e1, #667eea);
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CurrencyPair = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const CurrencySymbol = styled.span`
  color: #4a5568;
  font-size: 12px;
`;

const ChangeIndicator = styled.span`
  color: ${(props) => (props.$positive ? "#48bb78" : "#f56565")};
  font-weight: bold;
`;

const ListedInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListedFraction = styled.span`
  color: #4a5568;
  font-size: 12px;
`;

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.93179 2.22083L4.93179 2.99583L9.29429 2.99583L2.22079 10.0693L2.77164 10.6202L9.84514 3.54667L9.84514 7.90917H10.6201V2.22083H4.93179Z"
      fill="currentColor"
    />
  </svg>
);

const collections = [
  {
    id: 1,
    name: "Frogana",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UHJhseUTfjpQgYqzRH5JN8SnihJdcx.png",
    floor: { amount: 1.002, currency: "SOL" },
    floorChange: -7.3,
    volume: { amount: 7.7, currency: "SOL" },
    topOffer: { amount: 0.965, currency: "SOL" },
    sales: 6770,
    listed: { percentage: 25.5, fraction: "1,417 / 5,554" },
  },
  {
    id: 2,
    name: "Milady Maker",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UHJhseUTfjpQgYqzRH5JN8SnihJdcx.png",
    floor: { amount: 4.782, currency: "ETH" },
    floorChange: 5.2,
    volume: { amount: 191.3, currency: "ETH" },
    topOffer: { amount: 4.497, currency: "ETH" },
    sales: 40,
    listed: { percentage: 4.5, fraction: "447 / 9,977" },
    boost: "+25%",
  },
  {
    id: 3,
    name: "Jimmy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UHJhseUTfjpQgYqzRH5JN8SnihJdcx.png",
    floor: { amount: 92, currency: "APE" },
    floorChange: 268.0,
    volume: { amount: 184.6, currency: "APE" },
    topOffer: { amount: 74.4, currency: "APE" },
    sales: 2569,
    listed: { percentage: 9.6, fraction: "955 / 10K" },
    boost: "+50%",
  },
  {
    id: 4,
    name: "Bored Ape Yacht Club",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UHJhseUTfjpQgYqzRH5JN8SnihJdcx.png",
    floor: { amount: 11.66, currency: "ETH" },
    floorChange: -0.3,
    volume: { amount: 84.67, currency: "ETH" },
    topOffer: { amount: 11.29, currency: "ETH" },
    sales: 7,
    listed: { percentage: 2.9, fraction: "287 / 9,998" },
    boost: "+25%",
  },
  {
    id: 5,
    name: "Insurgence by Debauchery",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UHJhseUTfjpQgYqzRH5JN8SnihJdcx.png",
    floor: { amount: 0.002, currency: "BTC" },
    floorChange: 0,
    volume: { amount: 2.959, currency: "BTC" },
    topOffer: { amount: 0, currency: "BTC" },
    sales: 1095,
    listed: { percentage: 19.9, fraction: "697 / 3,500" },
    boost: "+25%",
  },
  {
    id: 6,
    name: "Courtyard.io",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UHJhseUTfjpQgYqzRH5JN8SnihJdcx.png",
    floor: { amount: 18, currency: "POL" },
    floorChange: -1.5,
    volume: { amount: 431.7, currency: "POL" },
    topOffer: { amount: 15.18, currency: "POL" },
    sales: 4032,
    listed: { percentage: 14.5, fraction: "7,362 / 50.7K" },
    boost: "+25%",
  },
];

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Section = styled.section`
  width: 100%;
  padding: 0;
`;

const IntroContent = styled.div`
  padding: 0 16px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 32px;
`;

const Description = styled.p`
  max-width: 700px;
  color: #6c757d;
  font-size: 18px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  padding: 0 16px;
  transition: background-color 0.3s;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const SecondaryButton = styled(Button)`
  border: 1px solid #ccc;
  background-color: #f8f9fa;

  &:hover {
    background-color: #e2e6ea;
  }
`;

const EbookGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EbookCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
`;

const EbookImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s;
  background-color: #f0f0f0;

  &:hover {
    transform: scale(1.05);
  }
`;

const EbookOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: flex-end;

  &:hover {
    opacity: 1;
  }
`;

const EbookDetails = styled.div`
  padding: 16px;
  color: #fff;
`;

const EbookTitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
`;

const EbookAuthor = styled.p`
  font-size: 14px;
`;

const DetailsButton = styled(Button)`
  margin-top: 8px;
  border: 1px solid #ccc;
  background-color: #6c757d;
  color: #fff;

  &:hover {
    background-color: #5a6268;
  }
`;

const ViewAll = styled.div`
  margin-top: 48px;
  text-align: center;
`;

const LaunchpadNote = styled.p`
  font-size: 12px;
  color: #6c757d;
  text-align: center;
`;

export default function NFTEbookMarketplace() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Non-fiction",
    "Fiction",
    "Science Fiction",
    "Fantasy",
    "Crime",
    "Romance",
    "Mystery",
    "Other",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 4) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <LayoutFront
      headTitle="Home"
      pageTitleSub={"Welcome to NFT Ebook Market"}
      pageClass={"front"}
      parent={"Home"}
      child={"Main"}
    >
      <div className="explore section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PageContainer>
                <MainContent>
                  <Section>
                    <CarouselContainer>
                      <SlideContainer>
                        <SlideTrack $translate={-currentIndex * slideWidth}>
                          {slides.map((slide) => (
                            <Slide key={slide.id}>
                              <SlideImage src={slide.image} alt={slide.title} />
                              <SlideContent>
                                <AlwaysVisibleText>
                                  <SlideTitle>{slide.title}</SlideTitle>
                                  <SlideCategory>
                                    {slide.category}
                                  </SlideCategory>
                                </AlwaysVisibleText>
                                <HoverText>
                                  <SlideDescription>
                                    {slide.description}
                                  </SlideDescription>
                                </HoverText>
                              </SlideContent>
                            </Slide>
                          ))}
                        </SlideTrack>
                      </SlideContainer>
                      {currentIndex > 0 && (
                        <NavButton
                          $direction="left"
                          onClick={prevSlide}
                          aria-label="Previous slide"
                        >
                          <ChevronLeft size={48} />
                        </NavButton>
                      )}

                      {currentIndex < slides.length - 4 && (
                        <NavButton
                          $direction="right"
                          onClick={nextSlide}
                          aria-label="Next slide"
                        >
                          <ChevronRight size={48} />
                        </NavButton>
                      )}
                    </CarouselContainer>
                  </Section>

                  <ScrollContainer>
                    <Nav>
                      {categories.map((category) => (
                        <ButtonTabs
                          key={category}
                          $active={activeCategory === category}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </ButtonTabs>
                      ))}
                    </Nav>
                  </ScrollContainer>

                  <TableContainer className="card">
                    <Table>
                      <thead>
                        <tr>
                          <Th>#</Th>
                          <Th>Book Name</Th>
                          <Th>Floor Price</Th>

                          <Th>Total Copies Sold</Th>
                          <Th>24h Copies Sold</Th>
                        </tr>
                      </thead>
                      <tbody>
                        {collections.map((collection) => (
                          <Tr key={collection.id} style={{ cursor: "pointer" }}>
                            <Td>{collection.id}</Td>
                            <Td>
                              <CollectionCell>
                                <ImageWrapper>
                                  <img
                                    src={collection.image}
                                    alt={collection.name}
                                    width={40}
                                    height={40}
                                    style={{ borderRadius: "9999px" }}
                                  />
                                </ImageWrapper>
                                <span>{collection.name}</span>
                              </CollectionCell>
                            </Td>
                            <Td>
                              <CurrencyPair>
                                <span>{collection.floor.amount}</span>
                                <CurrencySymbol>
                                  {collection.floor.currency}
                                </CurrencySymbol>
                              </CurrencyPair>
                            </Td>

                            <Td>{collection.sales}</Td>
                            <Td>{collection.sales}</Td>
                          </Tr>
                        ))}
                      </tbody>
                    </Table>
                  </TableContainer>

                  <Section>
                    <div className="cta section-padding">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="cta-content">
                              <IntroContent>
                                <Title>NFT Launchpad for Writers</Title>
                                <Description>
                                  Turn your ebooks into unique digital assets.
                                  Mint, sell, and manage your literary NFTs with
                                  ease.
                                </Description>
                                <ButtonGroup>
                                  <a className="btn btn-outline-primary">
                                    Create Your NFT Ebook
                                  </a>
                                </ButtonGroup>
                                <LaunchpadNote>
                                  Get started in minutes. No coding required.
                                </LaunchpadNote>
                              </IntroContent>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Section>
                </MainContent>
              </PageContainer>
            </div>
          </div>
        </div>
      </div>
    </LayoutFront>
  );
}
