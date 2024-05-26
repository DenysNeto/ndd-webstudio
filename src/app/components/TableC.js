"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "@/app/hooks/LanguageContext";

const ROW_PER_PAGE = 6;

const TableC = ({ columns, data }) => {
  const [pageData, setPageData] = useState(data.slice(0, ROW_PER_PAGE));
  const { t } = useTranslation();

  useEffect(() => {
    setPageData(data.slice(0, ROW_PER_PAGE));
  }, [data]);

  const handleShowMore = () => {
    const startIndex = pageData.length;
    const endIndex = startIndex + ROW_PER_PAGE;
    const newPageData = data.slice(startIndex, endIndex);
    setPageData(pageData.concat(newPageData));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > pageData.length && (
        <button onClick={handleShowMore}>{t("show_more")}</button>
      )}
    </div>
  );
};

export default TableC;
