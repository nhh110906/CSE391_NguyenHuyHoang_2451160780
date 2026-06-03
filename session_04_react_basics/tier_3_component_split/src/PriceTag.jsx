function PriceTag({ originalPrice, salePrice }) {
  const onSale = salePrice < originalPrice;
  return (
    <p>
      {onSale ? (
        <>
          <s>{originalPrice.toLocaleString("vi-VN")}đ</s>{" "}
          <strong style={{ color: "#e74c3c" }}>{salePrice.toLocaleString("vi-VN")}đ</strong>
        </>
      ) : (
        <strong>{originalPrice.toLocaleString("vi-VN")}đ</strong>
      )}
    </p>
  );
}

export default PriceTag;
