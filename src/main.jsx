import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Liquid } from "liquid-gooey";
import { mountRestaurantSite } from "./site.js";
import "./style.css";

const quickOrderItems = [
  {
    label: "Call New Sagar",
    href: "tel:+919182774775",
    y: -58,
    kind: "call",
  },
  {
    label: "Order on Swiggy",
    href: "https://www.swiggy.com/city/hyderabad/new-sagar-restaurant-and-bakers-jeedimetla-suraram-rest619437",
    y: -116,
    kind: "swiggy",
  },
  {
    label: "Order on Zomato",
    href: "https://www.zomato.com/hyderabad/new-sagar-restaurant-bakers-suraram/order",
    y: -174,
    kind: "zomato",
  },
];

function QuickOrderMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const closeOutside = (event) => {
      if (!menuRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("quick-order-open", open);
    return () => document.body.classList.remove("quick-order-open");
  }, [open]);

  const closeOnEscape = (event) => {
    if (event.key !== "Escape" || !open) return;
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <div
      className={`quick-order ${open ? "is-open" : ""}`}
      ref={menuRef}
      onKeyDown={closeOnEscape}
      role="group"
      aria-label="Quick order"
    >
      <Liquid
        className="quick-order__liquid"
        id="quick-order-options"
        role="group"
        blur={8}
        contrast={18}
        fill="var(--quick-order-surface)"
        shadow="0 8px 24px rgba(18, 31, 24, 0.24)"
        aria-label="Quick order options"
      >
        {quickOrderItems.map((item, index) => (
          <Liquid.Item
            key={item.kind}
            className="quick-order__item"
            x={0}
            y={open ? item.y : 0}
            transition="bouncy"
            delay={index * 28}
            style={{
              position: "absolute",
              right: "8px",
              bottom: "8px",
              width: "148px",
              height: "54px",
            }}
          >
            <a
              className={`quick-order__button quick-order__action quick-order__action--${item.kind}`}
              href={item.href}
              target={item.href.startsWith("https:") ? "_blank" : undefined}
              rel={item.href.startsWith("https:") ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              aria-hidden={!open}
              tabIndex={open ? 0 : -1}
              title={item.label}
              style={{ pointerEvents: open ? "auto" : "none" }}
            >
              <span>{item.label}</span>
              {item.kind !== "call" && <span aria-hidden="true">↗</span>}
            </a>
          </Liquid.Item>
        ))}
        <Liquid.Item
          className="quick-order__item"
          x={0}
          y={0}
          transition="bouncy"
          style={{
            position: "absolute",
            right: "8px",
            bottom: "8px",
            width: "148px",
            height: "54px",
          }}
        >
          <button
            className="quick-order__button quick-order__toggle"
            type="button"
            ref={toggleRef}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="quick-order-options"
            aria-label={open ? "Close quick order options" : "Open quick order options"}
          >
            <span>{open ? "Close" : "Quick order"}</span>
            <span aria-hidden="true">{open ? "×" : "＋"}</span>
          </button>
        </Liquid.Item>
      </Liquid>
    </div>
  );
}

function App() {
  useLayoutEffect(() => mountRestaurantSite(), []);

  return (
    <>
      <div id="restaurant-content" />
      <QuickOrderMenu />
    </>
  );
}

createRoot(document.querySelector("#app")).render(<App />);
