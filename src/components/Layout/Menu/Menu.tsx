"use client";

import { useState, useEffect } from "react";
import { Image, Icon, Input } from "semantic-ui-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { map } from "lodash";
import classNames from "classnames";
import styles from "./Menu.module.scss";
import { Platform } from "../../../api/platform";

const platformCtrl = new Platform();

const Menu = ({ isOpenSearch }: { isOpenSearch: boolean }) => {
  const [platforms, setPlatforms] = useState(null);
  const [showSearch, setShowSearch] = useState(isOpenSearch);
  const [searchText, setSearchText] = useState<string | string[]>("");
  const searchParams = useSearchParams();
  const search = searchParams.get("s") || "";
  const router = useRouter();

  const openCloseSearch = () => setShowSearch((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await platformCtrl.getAll();
        setPlatforms(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  const onSearch = (text: string) => {
    setSearchText(text);
    router.replace(`/search?s=${text}`);
  };

  return (
    <div className={styles.platforms}>
      {map(platforms, (platform: any) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image
            src={platform.attributes.icon.data.attributes.url}
            alt="Gaming"
          />
          {platform.attributes.title}
        </Link>
      ))}

      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>

      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-games"
          placeholder="Buscador"
          className={styles.input}
          focus={true}
          value={searchText}
          onChange={(_, data) => onSearch(data.value)}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
};

export default Menu;
