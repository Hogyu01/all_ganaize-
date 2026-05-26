# 올거나이즈 LLM PM 지원서 PDF

HTML/CSS/JavaScript와 Playwright로 A4 5페이지 지원서 PDF를 생성하는 프로젝트입니다.

## 설치 방법

```bash
npm install
```

## PDF 생성 방법

```bash
npm run pdf
```

## 생성 파일 위치

```text
output/심규호_올거나이즈_LLM_PM_지원서.pdf
```

## 브라우저 확인 방법

`index.html` 파일을 브라우저에서 열어 화면 미리보기를 확인할 수 있습니다. 우측 하단의 `인쇄 / PDF 저장` 버튼은 브라우저 확인용이며, 최종 PDF 생성은 Playwright 실행 기준입니다.

## 페이지 수 확인 방법

생성된 PDF를 Chrome, Edge, Acrobat Reader 등으로 열고 페이지 수가 5페이지인지 확인합니다. `print.js`는 PDF 생성 전에 HTML의 `.page` 요소가 정확히 5개인지 확인합니다.
