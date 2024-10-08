# 컨텐스트 기반, 동적 테마 관리

## 현황

최근 다양한 React 디자인 시스템 라이브러리들은 테마 관리 방식으로 **Provider 컴포넌트**를 제공한다. 이를 통해 동적인 테마 변경을 가능하게 하고, 사용자 경험을 개선할 수 있다.

- Mantine UI:
  ```jsx
  <MantineProvider theme={theme}>
  ```
- Radix UI:
  ```jsx
  <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
  ```

테마 관리 방식은 크게 두 가지로 나뉜다:

1. **Provider 방식** (동적 테마 관리)
2. **CDN 방식** (정적 테마 관리)

## 동적테마관리: Provider 방식

요즘 웹 서비스들은 사용자가 다양한 테마를 변경할 수 있는 선택권을 가지고 있다. Provider 방식은 해당 UX에 특화된 방식이다.

**장점**

1. **유연한 테마 관리**: 테마를 외부에서 동적으로 주입해 다양한 스타일을 쉽게 변경할 수 있다.
2. **런타임에서의 실시간 테마 변경**: 테마 변경 시 페이지 리로드 없이 즉각 반영된다.
3. **컴포넌트 단위 스타일 관리**: 각 컴포넌트에서 필요한 스타일만 로드되어 **성능 최적화**에 기여한다.
4. **SSR 지원**: 서버사이드 렌더링 시 테마가 적용된 HTML을 생성해 SEO와 성능 이점을 얻을 수 있다.

## 정적테마관리: CDN 방식

**CDN 방식**은 미리 빌드된 정적 CSS 파일을 CDN 서버에 배포하여 사용자가 빠르게 로드할 수 있도록 한다.

### **장점**

1. **빠른 성능**: CDN을 통해 전 세계 어디서든 빠르게 파일을 다운로드할 수 있다.
2. **브라우저 캐싱**: CSS 파일을 캐시하여 네트워크 트래픽을 줄이고 성능을 향상시킨다.
3. **패키지 용량 감소**: 애플리케이션에 CSS 파일을 포함하지 않음으로써 패키지 크기를 줄일 수 있다.
4. **코드와 스타일 분리**: 애플리케이션 코드와 스타일을 분리 관리할 수 있어 유지보수에 유리하다.

### **단점**

1. **동적 테마 변경 어려움**: 테마 변경 시 전체 CSS 파일을 다시 로드해야 한다.
2. **버전 동기화 문제**: CDN에 배포된 CSS 파일과 컴포넌트 라이브러리 간의 버전 차이로 인해 오류가 발생할 수 있다. 예를 들어, 컴포넌트 라이브러리의 새로운 버전에서 추가된 스타일이나 토큰이 CDN의 CSS 파일에는 반영되지 않아 오류가 발생할 수 있다.
3. **렌더링 차단 리소스**: CSS 파일은 렌더링 차단 리소스로 작동하기 때문에, 브라우저는 CSS 파일이 완전히 로드될 때까지 페이지의 렌더링을 멈춘다. 이로 인해 네트워크 지연이나 큰 CSS 파일로 인해 페이지 렌더링을 지연시킬 수 있다.

### 해당방식을 지원하는 CSS 라이브러리

- **Bootstrap**
  ```html
  <link
  	href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  	rel="stylesheet"
  />
  ```
- **Semantic UI**
  ```html
  <link
  	rel="stylesheet"
  	href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
  />
  ```

## 동적 VS 정적, 선택 가이드라인

| 기준                 | 동적 테마 관리 (Provider 방식)                          | 정적 테마 관리 (CDN 방식)                                               |
| -------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------- |
| **실시간 테마 변경** | 가능                                                    | 새로고침 필요                                                           |
| **유연성**           | 높음: 다양한 테마를 동적으로 관리 가능                  | 낮음: 정적 파일로 인해 동적 변경 어려움                                 |
| **페이지 로딩 속도** | 초기 렌더링 지연 가능성 있음                            | CDN을 통해 빠르게 로드하지만 렌더링 차단 리소스로 인해 지연 가능성 있음 |
| **브라우저 캐싱**    | 적용 없음                                               | 적용됨: CSS 파일을 브라우저 캐시 가능                                   |
| **패키지 용량**      | 상대적으로 큼: 스타일 코드가 패키지에 포함됨            | 작음: CSS 파일을 외부 CDN에서 관리                                      |
| **CSS 의존성 문제**  | 테마 관련 CSS와 컴포넌트가 동일한 패키지 내에서 관리됨. | CSS 파일과 컴포넌트 라이브러리 간의 일관성 유지가 어려울 수 있음        |
| **서버 부하**        | 증가할 수 있음                                          | 감소: CDN에서 파일 제공                                                 |

## 본인 회사의 경우

### **현재 사용 중인 방식: 정적 테마 관리 (CDN 방식)**

현재 디자인 시스템은 **Bootstrap**을 사용하여 정적 테마 관리 방식을 채택하고 있다. 이 방식은 CDN을 통해 CSS를 제공하지만, 빈번한 테마 변경과 CDN 링크 업데이트에 불편함이 발생하고 있다.

### **문제점 및 도전 과제**

1. **빈번한 변경 사항**: 테마 관련 CSS가 자주 변경되어 CDN 링크를 수동으로 업데이트해야 한다.
2. **버전 의존성 문제**: React 컴포넌트 라이브러리와 테마 CSS 파일 간의 버전 불일치로 인해 오류가 발생할 수 있다.

### **동적 테마 관리 (Provider 방식)의 대안**

**동적 테마 관리**를 도입하면, 테마 변경 사항을 실시간으로 반영할 수 있으며, 서버 사이드 렌더링을 통해 초기 렌더링 성능 저하를 방지할 수 있다.

### **결론**

현행 **정적 테마 관리 방식**은 빈번한 변경과 의존성 문제로 비효율적일 수 있다. **동적 테마 관리 방식**을 도입하면 초기 렌더링 성능 문제는 SSR을 통해 보완할 수 있고, 더 유연한 테마 변경 및 유지보수 환경을 구축할 수 있다.

## 어디까지 지원할 것인가?

### **Reset Style**

- 지원함.
- 브라우저마다 기본적으로 설정된 스타일을 제거하여 일관된 스타일을 제공하는 **reset CSS**는 필수적으로 포함돼야한다.
- **예시**:
  ```css
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  	margin: 0;
  	padding: 0;
  	border: 0;
  }
  ```

### **Component Style**

- 지원하지 않음.
- 각 컴포넌트 스타일은 디자인 시스템의 컴포넌트 패키지 내부에 정의되므로, Theme Provider에서 따로 정의하지 않는다.
- **예시**:
  ```css
  .button {
  	background-color: var(--color-primary);
  	padding: var(--space-500);
  	border-radius: var(--round-100);
  	font-size: var(--font-size-300);
  }
  ```

### **Foundation Style**

- 지원함
- Foundation 요소는 재사용 가능한 디자인 토큰이며, 시스템 전반에 걸쳐 사용됩니다.
- **지원하는 요소**:
  - **Color**: 색상
  - **Dimension**: 크기 (width, height)
  - **Border-radius**: 경계선 둥글기
  - **Typography**: 폰트 스타일 (font-size, font-family, line-height, font-weight)
  - **Space**: 여백 (gap, padding)
- 예시:
  ```css
  :root {
  	--color-primary: #1d4ed8;
  	--color-secondary: #f97316;
  	--font-size-base: 16px;
  	--border-radius-base: 8px;
  	--space-large: 24px;
  }
  ```

## 기술 스택

### CSS 라이브러리

- 클래스 유틸을 제공하지 않으므로, tailwind CSS 는 굳이 필요 없을 것 같음.

### 번들러

- tsup

## 트러블 슈팅

### border-radius

테마를 커스터마이징할 수 있게 하면 가장 자주 부딪히는 문제 중 하나가 border-radius임. 각 컴포넌트가 다른 경계선 반경을 사용하지만, 이를 사용자 정의로 열어두면 관리가 복잡해짐.

- AS-IS
    - 각 컴포넌트는 다양한 border-radius를 사용하였다.
        - 예: Button (8px, --border-radius-100), Badge (16px, --border-radius-200) 등.
    - 그러나 컴포넌트별로 높은 border-radius와 낮은 border-radius를 사용하는 것은 고정되어 있었다.
        - 예: Button보다 Badge가 더 둥글어야 한다.
    - 만약 사용자가 border-radius를 커스터마이즈할 수 있게 하면, 각 컴포넌트별로 border-radius를 일일이 설정해야 한다.
        - 예:
            - Button에 8px (--border-radius-100)이었던 것을 16px로 변경하고 싶다.
            - --border-radius-100을 8px에서 16px로 수정한다.
            - --border-radius-100이 증가함에 따라 원래 16px이었던 --border-radius-200도 적절한 px로 수정해야 한다.
            - --border-radius-200을 사용하는 Badge 컴포넌트에 적당한 px이 어울리는지 확인해야 하며, 어울리지 않으면 적당한 px을 다시 수정해야 한다.
            - border-radius를 커스터마이즈할 때마다 매우 번거로운 작업이 필요하며, 오류가 발생할 가능성이 있다.
- TO-BE
    - border-radius-factor 요소를 만들어줘서, `--border-radius-*` 와 곱셈을해줌.
        
        ```css
        .hm-jun {
        	--border-radius-factor-none: 0;
        	--border-radius-factor-sm: 0.75;
        	--border-radius-factor-md: 1;
        	--border-radius-factor-lg: 1.5;
        	--border-radius-factor-full: 999;
        }
        
        .hm-jun[data-hm-jun-theme="cake"] {
        	--border-radius-100: calc(4px * var(--border-radius-factor-md));
        	--border-radius-200: calc(8px * var(--border-radius-factor-md));
        	--border-radius-300: calc(16px * var(--border-radius-factor-md));
        }
        .hm-jun[data-hm-jun-theme="strawberry"] {
        	--border-radius-100: calc(4px * var(--border-radius-factor-full));
        	--border-radius-200: calc(8px * var(--border-radius-factor-full));
        	--border-radius-300: calc(16px * var(--border-radius-factor-full));
        }
        
        ```
        
    - 사용자는  --border-radius-factor-* 5가지 옵션 중 어떤 것을 사용할지만 결정하면, 나머지는 자동으로 결정된다.
    - 매우 빠르게 border-radius를 커스터마이즈할 수 있다.