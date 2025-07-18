import { useState } from "react";
import "./styles/ProductCard.css";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "254711279189";

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = (e) => {
    e.target.src = "/images/fallback.png";
    e.target.classList.add("image-error");
  };

  const toggleModal = (open) => {
    setIsModalOpen(open);
    document.body.style.overflow = open ? "hidden" : "auto";
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("product-modal")) {
      toggleModal(false);
    }
  };

  const handleWhatsAppCheckout = () => {
    const message = `Hello! I'm interested in the "${product.name}".\n\nDescription:\n${product.description}\n\nCould you please share more details and availability? Thanks!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    toggleModal(false);
  };

  const renderDescriptionList = (description) => {
    return (
      <ul className="product-description-list">
        {description.split("\n").map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {/* Product Card */}
      <article className="product-card">
        <div className="image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
            onError={handleImageError}
          />
        </div>

        <div className="product-content">
          <h3 className="product-name">{product.name}</h3>
          {product.description && (
            <p className="product-description">
              {product.description.length > 60
                ? `${product.description.substring(0, 60)}...`
                : product.description}
            </p>
          )}
          <p className="product-price">
            Ksh{" "}
            {product.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>

          <button
            className="view-details-button"
            onClick={() => toggleModal(true)}
            aria-label={`View details for ${product.name}`}
          >
            View details
          </button>
        </div>
      </article>

      {/* Product Modal */}
      {isModalOpen && (
        <div className="product-modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => toggleModal(false)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="modal-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="modal-product-image"
                onError={handleImageError}
              />
            </div>

            <div className="modal-details">
              <h2 className="modal-title">{product.name}</h2>
              <p className="modal-price">
                Ksh {product.price.toLocaleString()}
              </p>
              <div className="modal-actions">
                <button
                  className="whatsapp-button"
                  onClick={handleWhatsAppCheckout}
                >
                  <span>Buy on WhatsApp</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  className="continue-shopping-button"
                  onClick={() => toggleModal(false)}
                >
                  Continue Shopping
                </button>
              </div>

              {product.category && (
                <p className="modal-category">
                  Category: {Array.isArray(product.category)
                    ? product.category.join(", ")
                    : product.category}
                </p>
              )}

              <div className="modal-description">
                <h3 className="description-title">Product Details</h3>
                {renderDescriptionList(product.description)}
              </div>

            
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
