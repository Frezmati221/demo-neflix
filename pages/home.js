import React from "react";
import styled from "styled-components";
import LayoutFront from "../components/layout/LayoutFront";

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
  padding: 48px 0;
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
  margin: 0 auto;
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
  return (
    <LayoutFront
      headTitle="Home"
      pageTitleSub={"Welcome to NFT Ebook Market"}
      pageClass={"front"}
      parent={"Home"}
      child={"Main"}
    >
      <PageContainer>
        <MainContent>
          <Section>
            <IntroContent>
              <Title>Welcome to NFT Ebook Market</Title>
              <Description>
                Discover, trade, and create unique digital ebooks as NFTs.
                Empower authors and readers in the new era of digital
                literature.
              </Description>
              <ButtonGroup>
                <PrimaryButton>Browse Marketplace</PrimaryButton>
                <SecondaryButton>Learn More</SecondaryButton>
              </ButtonGroup>
            </IntroContent>
          </Section>

          <Section>
            <IntroContent>
              <Title>NFT Ebook Marketplace</Title>
              <EbookGrid>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <EbookCard key={item}>
                    <EbookImage
                      src={`/placeholder.svg?height=400&width=300`}
                      alt={`Ebook cover ${item}`}
                    />
                    <EbookOverlay>
                      <EbookDetails>
                        <EbookTitle>Ebook Title {item}</EbookTitle>
                        <EbookAuthor>Author Name</EbookAuthor>
                        <DetailsButton>View Details</DetailsButton>
                      </EbookDetails>
                    </EbookOverlay>
                  </EbookCard>
                ))}
              </EbookGrid>
              <ViewAll>
                <PrimaryButton>View All Ebooks</PrimaryButton>
              </ViewAll>
            </IntroContent>
          </Section>

          <Section>
            <IntroContent>
              <Title>NFT Launchpad for Writers</Title>
              <Description>
                Turn your ebooks into unique digital assets. Mint, sell, and
                manage your literary NFTs with ease.
              </Description>
              <ButtonGroup>
                <PrimaryButton>
                  <span className="icon-plus">➕</span> Create Your NFT Ebook
                </PrimaryButton>
              </ButtonGroup>
              <LaunchpadNote>
                Get started in minutes. No coding required.
              </LaunchpadNote>
            </IntroContent>
          </Section>
        </MainContent>
      </PageContainer>
    </LayoutFront>
  );
}
