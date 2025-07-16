import { useState } from "react";
import "./styles/ProductCard.css";
import { FiActivity } from "react-icons/fi";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "254711279189";

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = (e) => {
    e.target.src = "/images/fallback.png";
    e.target.classList.add("image-error");
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleWhatsAppCheckout = () => {
    const message = `Hello! I'm interested in the "${product.name}".Description: ${product.description}.Could you please share more details and availability? Thanks!`;

    const encodedMessage = encodeURIComponent(message);
    console.log(WHATSAPP_NUMBER)
    console.log(encodedMessage)

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, "_blank");
    closeModal();
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("product-modal")) {
      closeModal();
    }
  };

  return (
    <>
      {/* product card */}
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
            onClick={openModal}
            aria-label={`View details for ${product.name}`}
          >
            View details
          </button>
        </div>
      </article>

      {isModalOpen && (
        <div className="product-modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={closeModal}
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
              {product.category && (
                <p className="modal-category">Category: {product.category}</p>
              )}

              <div className="modal-description">
                <h3 className="description-title">Product Details</h3>
                <p className="description-text">{product.description}</p>
              </div>

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
                  onClick={closeModal}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
