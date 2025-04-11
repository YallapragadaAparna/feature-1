-- Table for customer_data_collection
CREATE TABLE IF NOT EXISTS customer_data (
  Customer_ID TEXT,
  Age INTEGER,
  Gender TEXT,
  Location TEXT,
  Browsing_History TEXT,
  Purchase_history TEXT,
  Customer_Segment TEXT,
  Avg_Order_Value REAL,
  Holiday TEXT,
  Season TEXT
);

-- Table for product_recommendation_dataset
CREATE TABLE IF NOT EXISTS product_recommendation (
  Product_ID TEXT,
  Category TEXT,
  SubCategory TEXT,
  Price REAL,
  Brand TEXT,
  Average_Rating_of_Similar_Products REAL,
  Product_Rating REAL,
  Customer_Review_Sentiment_Score REAL,
  Holiday TEXT,
  Season TEXT,
  Geographical_Location TEXT,
  Similar_Product_List TEXT,
  Probability_of_Recommendation REAL
);
