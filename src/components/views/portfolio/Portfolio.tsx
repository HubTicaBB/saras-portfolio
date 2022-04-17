import { useEffect, useState } from 'react';
import { data } from '../../../data';
import { content } from '../../../fixtures';
import useScreenSize from '../../../hooks/useScreenSize';
import { Artwork, Size, Status } from '../../../types/artworks';
import Section from '../../layout/Section';
import {
  artworkContainerCSS,
  artworkCSS,
  artworkInfoCSS,
  columnCSS,
  detailsCSS,
  filterCSS,
  filtersCSS,
  imageCSS,
  nameCSS,
  priceStatusCSS,
} from './style';
import { useTranslation } from 'react-i18next';

type Columns = {
  firstColumn: Artwork[];
  secondColumn: Artwork[];
  thirdColumn: Artwork[];
};

const splitToColumns = (data: Artwork[]): Columns => {
  const third = Math.ceil(data.length / 3);

  return {
    firstColumn: data.slice(0, third),
    secondColumn: data.slice(third, third + third),
    thirdColumn: data.slice(third + third),
  };
};

const Portfolio = () => {
  const [filterFocusId, setFilterFocusId] = useState<string | null | undefined>(
    content.portfolio.filters[0]
  );
  const [filterHoverId, setFilterHoverId] = useState<
    string | null | undefined
  >();
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>(data);
  const [artworks, setArtworks] = useState<Columns>(
    splitToColumns(filteredArtworks)
  );
  const [artworkHoverId, setArtworkHoverId] = useState<
    number | null | undefined
  >();

  useEffect(() => {
    setArtworks(splitToColumns(filteredArtworks));
  }, [filteredArtworks]);

  const { screenS, screenL } = useScreenSize();
  const { t } = useTranslation(['content']);

  const isFilterHovered = (id: string) => id === filterHoverId;
  const isFilterFocused = (id: string) => id === filterFocusId;
  const isArtworkHovered = (id: number) => id === artworkHoverId;

  const formatSize = ({ width, height, radius }: Size) => {
    if (width && height) return `${width} x ${height} cm`;
    if (radius) return `R ${radius} cm`;
    if (width || height) return `${width ?? height} cm`;
    return '';
  };

  const formatPriceStatus = (price?: string, status?: Status) => {
    switch (status) {
      case 'available':
        return price;
      case 'sold':
        return 'Sold';
      default:
        return 'Sold';
    }
  };

  const filterArtworks = (categoryId: string) => {
    const filtered =
      categoryId === 'all'
        ? data
        : data.filter(({ category }) => category === categoryId);

    setFilteredArtworks(filtered);
  };

  return (
    <Section title={t('content:portfolio.title')}>
      <ul style={filtersCSS}>
        {content.portfolio.filters.map((filter) => (
          <li
            key={filter}
            onClick={() => {
              filterArtworks(filter);
              setFilterFocusId(filter);
            }}
            onMouseOver={() => setFilterHoverId(filter)}
            onMouseOut={() =>
              setFilterHoverId(isFilterFocused(filter) ? filterHoverId : null)
            }
            style={filterCSS(
              isFilterHovered(filter),
              isFilterFocused(filter),
              screenL
            )}
          >
            {t(`content:portfolio.filter.${filter}`)}
          </li>
        ))}
      </ul>

      <div
        id='portfolio'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {Object.entries(artworks).map(([key, value]) => {
          return (
            <div key={key} style={columnCSS(screenS, screenL)}>
              {value.map(
                ({
                  id,
                  name,
                  category,
                  size,
                  technique,
                  status,
                  price,
                }: Artwork) => (
                  <div key={id} style={artworkContainerCSS()}>
                    <div
                      onMouseOver={() => setArtworkHoverId(id)}
                      onMouseOut={() => setArtworkHoverId(null)}
                      style={artworkCSS()}
                    >
                      <img
                        src={require(`../../../assets/${category}/${id}.jpg`)}
                        alt={name}
                        style={imageCSS(isArtworkHovered(id))}
                      />
                      <div style={artworkInfoCSS(isArtworkHovered(id))}>
                        <h4 style={nameCSS()}>{name}</h4>
                        <p style={detailsCSS()}>{technique}</p>
                        <p style={detailsCSS()}>
                          <span>{formatSize(size)}</span>
                          <span style={priceStatusCSS()}>
                            {formatPriceStatus(price, status)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Portfolio;
