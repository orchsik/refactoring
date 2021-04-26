## 01. Replace Derived Variable with Query

### 파생 변수를 질의 함수로 바꾸기

```js
class Others {
  get discountedTotal() {
    return this._discountedTotal;
  }

  set discount(aNumber) {
    const old = this._discount;
    this._discount = aNumber;
    this._discountedTotal += old - aNumber;
  }
}
```

```js
class Others {
  get discountedTotal() {
    return this._baseTotal - this._discount;
  }

  set discount(aNumber) {
    this._discount = aNumber;
  }
}
```

- 값을 쉽게 계산할 수 있는 변수를 모두 제거해서, 가변 데이터의 유효 범위를 가능한 한 좁혀라.
