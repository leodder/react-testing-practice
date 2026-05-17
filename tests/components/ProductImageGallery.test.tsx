import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery.tsx";

describe("ProductImageGallery", () => {
    it("should display nothing when no images are provided", () => {
        // render(<ProductImageGallery imageUrls={[]} />);
        // const images = screen.queryByRole("img");
        const { container } = render(<ProductImageGallery imageUrls={[]} />);
        // expect(images).not.toBeInTheDocument();
        expect(container).toBeEmptyDOMElement();
    });
    it("should display images when image URLs are provided", () => {
        const imageUrls = [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
        ];
        render(<ProductImageGallery imageUrls={imageUrls} />);
        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(imageUrls.length);
        imageUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute("src", url);
        })
    })
})
