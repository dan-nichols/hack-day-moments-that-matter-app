# Financial Fitness App Skeleton

## Usage
```
cd FinancialFitnessApp
react-native run-ios
```

## Development Setup

Visit this directory and install the NPM dependencies:

```
cd FinancialFitnessApp
npm install
```

## Special Remarks

When a component is brought in from suncorp-react-native-components it seems that dev dependencies from the component
also need to be defined in this apps package.json. This needs to be investigated to see if this limitation in using
components can be removed.

The import of a component also from suncorp-react-native-components also currently needs to specify the full path to
the component (e.g. suncorp-react-native-components/src/components/molecules/PriceDifferentialItem/index) otherwise it
cannot be found properly. This limitation needs to be investigated and rectified as consumers of compoments should
not need to know or specify exactly where the component is defined in the component library.