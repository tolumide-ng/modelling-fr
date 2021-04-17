import * as React from "react";
import { ConvertProgress } from "../../UI/organisms/ConvertProgress";
import { DownloadFile } from "../../UI/organisms/DownloadFile";
import { DropFile } from "../../UI/organisms/DropFile";
import { SelectConversion } from "../../UI/organisms/SelectConversion";
import { ShadowContainer } from "../../UI/organisms/ShadowContainer";
import { UploadFile } from "../../UI/organisms/UploadFile";
import styles from "./index.module.css";

interface displayCompsDef {
    [key: number]: () => JSX.Element;
}

export const HomePage = () => {
    const [current, setCurrent] = React.useState(5);
    const [theFile, setTheFile] = React.useState<File | undefined>(undefined);

    const displayComps: displayCompsDef = {
        1: () => <DropFile changeScreen={setCurrent} changeFile={setTheFile} />,
        2: () => <UploadFile fileName={theFile?.name ?? ""} />,
        3: () => <SelectConversion />,
        4: () => <ConvertProgress />,
        5: () => <DownloadFile />,
    };

    return (
        <article className={styles.ldpg}>
            <ShadowContainer
                childContent={displayComps[current]()}
                current={current}
            />
        </article>
    );
};
