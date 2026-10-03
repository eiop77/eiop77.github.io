"use strict";


/* =========================================================
   NEMESIS CUSTOM OBJECTIVES
   ========================================================= */

const OBJECTIVES = [

    {
        id: 1,
        title: "웨이랜드 직속 해결사",
        image: "",
        text: `
            CEO는 영생의 목표를 위해 당신에게 미션을 내렸습니다.

            에일리언 시체 혹은 에일리언 알을 가지고 지구로 돌아가거나
            유충에 감염된 사람과 당신이 지구로 돌아가야 합니다
        `
    },

    {
        id: 2,
        title: "함께하는 동안 싹튼 감정",
        image: "",
        text: `
            내 다음 후플레이어와 당신은 지구로 돌아가야 합니다.
            만약 내 다음 후플레이어가 사망시
            후플레이어 시체를 갖고 지구로 돌아가야 합니다.
        `
    },

    // ... 나머지 목표 3 ~ 25 ...
];


/* =========================================================
   상태
   ========================================================= */

let assignedPlayers = [];
let currentPlayerIndex = 0;

let gameId = null;

const STORAGE_PREFIX =
    "NEMESIS_CUSTOM_OBJECTIVE_V3_";


/* =========================================================
   DOM
   ========================================================= */

const setupScreen =
    document.getElementById("setupScreen");

const qrScreen =
    document.getElementById("qrScreen");

const objectiveScreen =
    document.getElementById("objectiveScreen");

const scannerScreen =
    document.getElementById("scannerScreen");

const errorScreen =
    document.getElementById("errorScreen");

const playerCount =
    document.getElementById("playerCount");

const startButton =
    document.getElementById("startButton");

const nextPlayerButton =
    document.getElementById("nextPlayerButton");

const errorBackButton =
    document.getElementById("errorBackButton");


/* =========================================================
   화면 전환
   ========================================================= */

function showScreen(screen) {

    [
        setupScreen,
        qrScreen,
        objectiveScreen,
        scannerScreen,
        errorScreen
    ].forEach(element => {
        element.classList.add("hidden");
    });

    screen.classList.remove("hidden");
}


/* =========================================================
   배열 섞기
   ========================================================= */

function shuffle(array) {

    const result = [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];
    }

    return result;
}


/* =========================================================
   게임 ID
   ========================================================= */

function generateGameId() {

    return (
        Date.now().toString(36) +
        "-" +
        Math.random()
            .toString(36)
            .substring(2, 10)
    );
}


/* =========================================================
   목표 배정
   =========================================================
   
   플레이어마다 목표 2장씩 배정합니다.
   전체 플레이어 사이에서도 목표가 중복되지 않습니다.
   ========================================================= */

function createObjectives(playerCount) {

    const shuffled =
        shuffle(OBJECTIVES);

    const required =
        playerCount * 2;

    if (
        required >
        shuffled.length
    ) {

        throw new Error(
            `플레이어 ${playerCount}명에게 목표 2장씩 배정하려면 ` +
            `최소 ${required}개의 목표가 필요합니다.`
        );
    }

    gameId =
        generateGameId();

    assignedPlayers = [];

    for (
        let i = 0;
        i < playerCount;
        i++
    ) {

        assignedPlayers.push({

            player:
                i + 1,

            objectives: [

                shuffled[i * 2],

                shuffled[i * 2 + 1]

            ]
        });
    }
}


/* =========================================================
   QR 데이터 생성
   ========================================================= */

function createQRData(player) {

    const payload = {

        type:
            "NEMESIS_OBJECTIVE",

        version:
            3,

        gameId:
            gameId,

        player:
            player.player,

        objectiveIds:
            player.objectives.map(
                objective =>
                    objective.id
            )
    };

    const json =
        JSON.stringify(payload);

    const encoded =
        base64Encode(json);

    return (
        window.location.origin +
        window.location.pathname +
        "#NMS3." +
        encoded
    );
}


/* =========================================================
   Base64
   ========================================================= */

function base64Encode(text) {

    const bytes =
        new TextEncoder()
            .encode(text);

    let binary = "";

    bytes.forEach(byte => {

        binary +=
            String.fromCharCode(byte);

    });

    return btoa(binary)
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}


function base64Decode(encoded) {

    encoded =
        encoded
            .replace(/-/g, "+")
            .replace(/_/g, "/");

    while (
        encoded.length % 4
    ) {

        encoded += "=";
    }

    const binary =
        atob(encoded);

    const bytes =
        Uint8Array.from(
            binary,
            character =>
                character.charCodeAt(0)
        );

    return new TextDecoder()
        .decode(bytes);
}


/* =========================================================
   QR 표시
   ========================================================= */

function showQRCode() {

    showScreen(qrScreen);

    const playerNumber =
        currentPlayerIndex + 1;

    document.getElementById(
        "currentPlayer"
    ).textContent =
        playerNumber;

    document.getElementById(
        "qrPlayerNumber"
    ).textContent =
        playerNumber;

    document.getElementById(
        "progressText"
    ).textContent =
        `${playerNumber} / ${assignedPlayers.length}`;

    const qrContainer =
        document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    const qrData =
        createQRData(
            assignedPlayers[
                currentPlayerIndex
            ]
        );

    new QRCode(
        qrContainer,
        {

            text:
                qrData,

            width:
                240,

            height:
                240,

            correctLevel:
                QRCode.CorrectLevel.H
        }
    );

    if (
        currentPlayerIndex ===
        assignedPlayers.length - 1
    ) {

        nextPlayerButton.textContent =
            "✓ 게임 준비 완료";

    } else {

        nextPlayerButton.textContent =
            "다음 플레이어 →";
    }
}


/* =========================================================
   게임 시작
   ========================================================= */

startButton.addEventListener(
    "click",
    () => {

        const count =
            Number(
                playerCount.value
            );

        if (
            count < 1
        ) {

            alert(
                "플레이어 수를 확인해주세요."
            );

            return;
        }

        if (
            count * 2 >
            OBJECTIVES.length
        ) {

            alert(
                `현재 등록된 목표는 ${OBJECTIVES.length}개입니다.\n` +
                `플레이어 ${count}명에게는 ` +
                `${count * 2}개의 목표가 필요합니다.`
            );

            return;
        }

        try {

            createObjectives(count);

        }
        catch (error) {

            alert(
                error.message
            );

            return;
        }

        currentPlayerIndex =
            0;

        showQRCode();
    }
);


/* =========================================================
   다음 플레이어
   ========================================================= */

nextPlayerButton.addEventListener(
    "click",
    () => {

        if (
            currentPlayerIndex <
            assignedPlayers.length - 1
        ) {

            currentPlayerIndex++;

            showQRCode();

        } else {

            showScreen(
                scannerScreen
            );

            startScanner();
        }
    }
);


/* =========================================================
   선택 저장 키
   ========================================================= */

function getSelectionStorageKey(data) {

    return (
        STORAGE_PREFIX +
        `${data.gameId}_P${data.player}`
    );
}


/* =========================================================
   선택 결과 저장
   ========================================================= */

function saveSelection(
    data,
    objectiveId
) {

    const key =
        getSelectionStorageKey(data);

    localStorage.setItem(
        key,
        JSON.stringify({

            objectiveId:
                objectiveId,

            selectedAt:
                Date.now()
        })
    );
}


/* =========================================================
   선택 결과 불러오기
   ========================================================= */

function getSavedSelection(data) {

    const key =
        getSelectionStorageKey(data);

    const saved =
        localStorage.getItem(key);

    if (!saved) {

        return null;
    }

    try {

        return JSON.parse(saved);

    }
    catch {

        localStorage.removeItem(key);

        return null;
    }
}


/* =========================================================
   목표 화면
   ========================================================= */

function showObjective(data) {

    const saved =
        getSavedSelection(data);

    const container =
        document.getElementById(
            "objectiveContent"
        );

    if (!container) {

        return;
    }

    container.innerHTML = "";

    const objectives =
        data.objectives
            .map(objectiveId =>
                OBJECTIVES.find(
                    objective =>
                        objective.id ===
                        objectiveId
                )
            )
            .filter(Boolean);


    /* -----------------------------------------------------
       이미 선택한 경우
       ----------------------------------------------------- */

    if (saved) {

        const selected =
            objectives.find(
                objective =>
                    objective.id ===
                    saved.objectiveId
            );

        if (selected) {

            container.innerHTML =
                createFinalObjectiveHTML(
                    selected
                );

            showScreen(
                objectiveScreen
            );

            return;
        }
    }


    /* -----------------------------------------------------
       아직 선택하지 않은 경우
       ----------------------------------------------------- */

    container.innerHTML = `

        <div class="objectiveChoiceHeader">

            <div class="objectivePlayer">
                PLAYER ${data.player}
            </div>

            <h2>
                최종 목표를 선택하세요
            </h2>

            <p>
                첫 번째 인트루더 조우 시
                두 목표 중 하나를 선택합니다.
            </p>

        </div>

        <div class="objectiveChoiceGrid">

            ${objectives
                .map(objective =>
                    createObjectiveChoiceHTML(
                        objective
                    )
                )
                .join("")
            }

        </div>

        <button
            id="objectiveBackButton"
            class="secondaryButton"
        >
            QR 스캐너로 돌아가기
        </button>
    `;


    objectives.forEach(
        objective => {

            const button =
                document.getElementById(
                    `selectObjective-${objective.id}`
                );

            if (!button) {
                return;
            }

            button.addEventListener(
                "click",
                () => {

                    if (
                        !confirm(
                            `「${objective.title}」을(를) 최종 목표로 선택하시겠습니까?\n\n` +
                            `선택 후에는 다른 목표를 다시 볼 수 없습니다.`
                        )
                    ) {

                        return;
                    }

                    saveSelection(
                        data,
                        objective.id
                    );

                    showObjective(data);
                }
            );
        }
    );


    const backButton =
        document.getElementById(
            "objectiveBackButton"
        );

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                showScreen(
                    scannerScreen
                );

                startScanner();
            }
        );
    }


    showScreen(
        objectiveScreen
    );
}


/* =========================================================
   목표 선택 카드 HTML
   ========================================================= */

function createObjectiveChoiceHTML(
    objective
) {

    const imageHTML =
        objective.image &&
        objective.image.trim() !== ""

            ? `
                <img
                    class="objectiveImage"
                    src="${escapeHTML(
                        objective.image
                    )}"
                    alt=""
                >
            `

            : `
                <div
                    class="objectiveImagePlaceholder"
                >
                    NEMESIS
                </div>
            `;

    return `

        <article
            class="objectiveChoiceCard"
        >

            ${imageHTML}

            <div
                class="objectiveCardBody"
            >

                <h3>
                    ${escapeHTML(
                        objective.title
                    )}
                </h3>

                <div
                    class="objectiveText"
                >
                    ${formatObjectiveText(
                        objective.text
                    )}
                </div>

                <button
                    id="selectObjective-${objective.id}"
                    class="selectObjectiveButton"
                >
                    이 목표를 선택
                </button>

            </div>

        </article>
    `;
}


/* =========================================================
   최종 목표 HTML
   ========================================================= */

function createFinalObjectiveHTML(
    objective
) {

    const imageHTML =
        objective.image &&
        objective.image.trim() !== ""

            ? `
                <img
                    class="objectiveImage"
                    src="${escapeHTML(
                        objective.image
                    )}"
                    alt=""
                >
            `

            : `
                <div
                    class="objectiveImagePlaceholder"
                >
                    NEMESIS
                </div>
            `;

    return `

        <div class="finalObjectiveHeader">

            <div class="objectivePlayer">
                FINAL OBJECTIVE
            </div>

            <h2>
                최종 개인 목표
            </h2>

        </div>

        <article
            class="finalObjectiveCard"
        >

            ${imageHTML}

            <div
                class="objectiveCardBody"
            >

                <h3>
                    ${escapeHTML(
                        objective.title
                    )}
                </h3>

                <div
                    class="objectiveText"
                >
                    ${formatObjectiveText(
                        objective.text
                    )}
                </div>

            </div>

        </article>

        <div class="finalObjectiveNotice">
            이 목표가 당신의 최종 개인 목표입니다.
        </div>

        <button
            id="objectiveBackButton"
            class="secondaryButton"
        >
            QR 스캐너로 돌아가기
        </button>
    `;
}


/* =========================================================
   목표 텍스트 포맷
   ========================================================= */

function formatObjectiveText(text) {

    return text
        .trim()
        .split("\n")
        .map(line => {

            const trimmed =
                line.trim();

            if (
                trimmed === ""
            ) {

                return "<br>";
            }

            if (
                trimmed.startsWith("•")
            ) {

                return `
                    <div class="objectiveBullet">
                        ${escapeHTML(
                            trimmed
                        )}
                    </div>
                `;
            }

            return `
                <p>
                    ${escapeHTML(
                        trimmed
                    )}
                </p>
            `;

        })
        .join("");
}


/* =========================================================
   HTML Escape
   ========================================================= */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   QR 데이터 처리
   ========================================================= */

function processQRData(url) {

    try {

        const parsedURL =
            new URL(url);

        const hash =
            parsedURL.hash;

        if (
            !hash.startsWith("#NMS3.")
        ) {

            throw new Error(
                "NMS3 형식이 아닙니다.\n\nHASH:\n" +
                hash
            );
        }

        const encoded =
            hash.substring(
                "#NMS3.".length
            );

        const json =
            base64Decode(encoded);

        const data =
            JSON.parse(json);


        if (
            data.type !==
            "NEMESIS_OBJECTIVE"
        ) {

            throw new Error(
                "잘못된 목표 데이터입니다."
            );
        }


        if (
            data.version !== 3
        ) {

            throw new Error(
                "지원하지 않는 QR 버전입니다."
            );
        }


        if (
            !data.gameId
        ) {

            throw new Error(
                "게임 ID가 없습니다."
            );
        }


        if (
            !Array.isArray(
                data.objectiveIds
            ) ||
            data.objectiveIds.length !== 2
        ) {

            throw new Error(
                "플레이어에게 배정된 목표 2장을 찾을 수 없습니다."
            );
        }


        const objectives =
            data.objectiveIds.map(
                objectiveId =>
                    OBJECTIVES.find(
                        objective =>
                            objective.id ===
                            objectiveId
                    )
            );


        if (
            objectives.some(
                objective =>
                    !objective
            )
        ) {

            throw new Error(
                "QR에 포함된 목표를 찾을 수 없습니다."
            );
        }


        showObjective({

            player:
                data.player,

            gameId:
                data.gameId,

            objectives:
                data.objectiveIds
        });

    }

    catch (error) {

        console.error(error);

        document.getElementById(
            "errorMessage"
        ).textContent =
            error.message;

        showScreen(
            errorScreen
        );
    }
}


/* =========================================================
   URL Hash 확인
   ========================================================= */

function checkURLHash() {

    const hash =
        window.location.hash;

    if (
        !hash.startsWith("#NMS3.")
    ) {

        return;
    }

    processQRData(
        window.location.href
    );
}


/* =========================================================
   QR Scanner
   ========================================================= */

let scanner = null;


function startScanner() {

    if (scanner) {

        try {

            scanner.clear();

        }
        catch (error) {

            console.log(error);
        }
    }


    scanner =
        new Html5Qrcode(
            "reader"
        );


    scanner.start(

        {
            facingMode:
                "environment"
        },

        {
            fps:
                10,

            qrbox:
                {
                    width: 250,
                    height: 250
                }
        },

        decodedText => {

            scanner
                .stop()
                .catch(
                    () => {}
                );

            processQRData(
                decodedText
            );
        },

        () => {

            /*
             * QR 검색 중 발생하는
             * 일반 오류는 무시
             */
        }

    )
    .catch(error => {

        console.error(error);

        alert(
            "카메라를 사용할 수 없습니다.\n" +
            "브라우저의 카메라 권한을 확인해주세요."
        );
    });
}


/* =========================================================
   오류 화면
   ========================================================= */

errorBackButton.addEventListener(
    "click",
    () => {

        showScreen(
            setupScreen
        );
    }
);


/* =========================================================
   페이지 시작
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        checkURLHash();

    }
);
