"use strict";


/* =========================================================
   NEMESIS CUSTOM OBJECTIVES
   ========================================================= */

const OBJECTIVES = [
    {
        id: 1,
        title: "웨이랜드 직속 해결사",
        image: "images/1.png",
        text: `
            CEO는 영생의 목표를 위해 당신에게 미션을 내렸습니다.

            에일리언 시체 혹은 에일리언 알, 혹은 유충을
            가진 사람 중 하나를 지구로 가져와야 합니다.
        `
    },
    {
        id: 2,
        title: "함께하는 동안 싹튼 감정",
        image: "images/2.png",
        text: `
            내 다음 후플레이어와 당신은 지구로 돌아가야 합니다.

            만약 내 다음 후플레이어가 사망시
            후플레이어 시체를 갖고 지구로 돌아가야 합니다.
        `
    },
    {
        id: 3,
        title: "웨이랜드 보안 책임자",
        image: "images/3.png",
        text: `
            인트루더에 대한 많은 정보가 새어나가선 안됩니다.

            당신을 제외한 모든 인원이 지구로 돌아가지 못하거나
            사망해야 합니다.

            당신은 지구로 돌아가야 합니다.
        `
    },
    {
        id: 4,
        title: "프로메테우스 엘리자베스 쇼 박사",
        image: "images/4.png",
        text: `
            인간을 만든게 누구고 인트루더는 무엇이고
            어디서 왔는지 알기 위해 떠납니다.

            인트루더 약점을 2개 이상 파악된 상태로
            당신은 심우주로 가야 합니다.
        `
    },
    {
        id: 5,
        title: "인트루더 공포 숭배자",
        image: "images/5.png",
        text: `
            여왕이 죽지 않고 우주선이 파괴되지 않아야 합니다.

            당신은 지구로 돌아가야 합니다.
        `
    },
    {
        id: 6,
        title: "노멀 플레이어",
        image: "images/6.png",
        text: `
            생존해서 지구로 돌아가야합니다.
        `
    },
    {
        id: 7,
        title: "직접 확인해야하는 수수께끼 인물",
        image: "images/7.png",
        text: `
            당신은 가장 마지막으로 좌표를 확인 혹은 수정하거나
            남이 만진 엔진을 수리 액션(고장도 가능) 해야 합니다.

            지구 혹은 화성으로 가야 합니다.
        `
    },
    {
        id: 8,
        title: "우주 상인",
        image: "images/8.png",
        text: `
            자의에 의해서든 타인에 의해서든
            당신과의 거래가 2번 이루어져야 합니다.

            아이템 혹은 물체의 실제 거래가 이루어져야 합니다.

            그리고 지구로 돌아가야 합니다.
        `
    },
    {
        id: 9,
        title: "파멸의 씨앗",
        image: "images/9.png",
        text: `
            인트루더 알을 가진채로
            당신은 지구 혹은 화성에 가야 합니다.
        `
    },
    {
        id: 10,
        title: "동면 속 기적적 생존자",
        image: "images/10.png",
        text: `
            당신은 반드시 동면을 통해 지구에 도착해야 합니다.

            동면 상태로 지구에 도착시
            당신은 스캐너 과정을 생략하고 승리합니다.
        `
    },
    {
        id: 11,
        title: "동료애가 깊은 사람",
        image: "images/11.png",
        text: `
            당신은 다른 플레이어 1명 이상이 구명정으로 탈출한 후에
            구명정으로 탈출하거나,

            다른 플레이어 1명 이상이 동면한 후에
            동면해서 지구로 가야 합니다.
        `
    },
    {
        id: 12,
        title: "기억상실증 - 스스로를 믿지 못하는 사람",
        image: "images/12.png",
        text: `
            퀘스트 카드 2개를 클리어하거나

            2개를 클리어하지 않고 지구로 돌아가야 합니다.
        `
    },
    {
        id: 13,
        title: "유능한 기술자",
        image: "images/13.png",
        text: `
            고장난 방을 2개 이상 수리 후
            지구로 돌아가야 합니다.
        `
    },
    {
        id: 14,
        title: "인트루더 킬러",
        image: "images/14.png",
        text: `
            성체 이상 인트루더 1마리 사살 관여 후
            (피해 1 이상 입힘),

            지구로 귀환.
        `
    },
    {
        id: 15,
        title: "지구에 묻어주고 싶은 전우",
        image: "images/15.png",
        text: `
            당신이 죽으면 이 미션을 공개합니다.

            당신의 시체를 다른 플레이어가 갖고
            지구로 귀환한다면 당신은 승리합니다.

            당신의 시체를 든 플레이어는 팔 부상이 응급처치 됩니다.
            (팔 부상이 두 개라면 응급처치되지 않고
            당신을 들 수 없습니다.)

            죽지 않았다면 지구로 귀환해야 합니다.
        `
    },
    {
        id: 16,
        title: "생물학 전문가",
        image: "images/16.png",
        text: `
            인트루더 약점 2개 이상 공개된 상태로
            지구 돌아가야 합니다.
        `
    },
    {
        id: 17,
        title: "역경 속 유능한 사람",
        image: "images/17.png",
        text: `
            다음 중 하나를 수행해야 합니다.

            • 인트루더 약점 공개 1회
            • 엔진 확인 1회
            • 좌표 확인 1회

            그리고 지구로 돌아가야 합니다.
        `
    },
    {
        id: 18,
        title: "우주선 책임자",
        image: "images/18.png",
        text: `
            우주선이 파괴되어선 안되며
            당신은 생존해야 합니다.

            어느 좌표로 가든 상관 없습니다.
        `
    },
    {
        id: 19,
        title: "이기적인 생존자",
        image: "images/19.png",
        text: `
            구명정 탈출시 탑승석 한 칸을 비워두고 탈출하거나

            동면시 마지막 동면 플레이어가 아니라면
            승리합니다.
        `
    },
    {
        id: 20,
        title: "장비 전문가",
        image: "images/20.png",
        text: `
            아이템 빨강 / 노랑 / 초록 색상 중
            1개 이상 아이템 보유 상태로
            지구로 돌아가야 합니다.
        `
    },
    {
        id: 21,
        title: "화성 개척자",
        image: "images/21.png",
        text: `
            지구로 귀환해야 하는 목표의 다른 플레이어와
            당신은 화성에 도착시 모두 승리합니다.

            단, 오염검사는 거쳐야 합니다.
        `
    },
    {
        id: 22,
        title: "1급 범죄자",
        image: "images/22.png",
        text: `
            당신은 지구 외의 장소에 도착한다면 승리합니다.
        `
    },
    {
        id: 23,
        title: "프로메테우스 커버넌트 데이빗",
        image: "images/23.png",
        text: `
            당신은 안드로이드입니다.

            당신이 감염으로 사망할 위기일 때
            이 카드를 공개합니다.

            공개 이후부터 감염으로 사망하지 않습니다.

            몸에 붙은 유충은 모두 현재 장소에 배치합니다.
            유충의 공격대상이 항상 당신에서
            같은 칸에 있는 가까운 순서 플레이어로 변경됩니다.

            당신은 초공간도약으로 사망하지 않습니다.

            다른 플레이어 한 명 이상이 동면해야 합니다.

            우주선이 파괴되어선 안됩니다.

            당신이 우주선 안에서 활동 가능한
            (구명정 X, 동면 X) 마지막 플레이어면서
            자폭 시퀀스가 해제 가능한 상태라면

            그 시점에서 자폭 시퀀스는 무효가 되고
            게임은 종료됩니다.

            당신은 승리합니다.

            이외의 경우, 당신은 패배합니다.
        `
    },
    {
        id: 24,
        title: "로물루스 앤디",
        image: "images/24.png",
        text: `
            당신은 안드로이드입니다.

            당신이 감염으로 사망할 위기일 때
            이 카드를 공개합니다.

            공개 이후부터 감염으로 사망하지 않고
            어떠한 경우에도 유충을 더 이상 받지 않습니다.

            당신은 초공간도약으로 사망하지 않습니다.

            당신의 후순서 플레이어가 생존
            (후순서 플레이어의 미션은 상관없음)한다면

            당신이 사망하더라도 당신은 승리합니다.
        `
    },
    {
        id: 25,
        title: "커버넌트 대니얼스",
        image: "images/25.png",
        text: `
            구명정을 통해 지구로 돌아가야 합니다.

            혹은 우주선 안에서 활동 가능한 마지막 플레이어일 때
            동면해서 지구로 돌아가야 합니다.
        `
    }
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
