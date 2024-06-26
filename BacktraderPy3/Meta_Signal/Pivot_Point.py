import backtrader as bt
import pandas as pd

# Create a custom indicator for pivot points
class PivotPoint(bt.Indicator):
    lines = ('pivothigh', 'pivotlow',)
    params = (('lookback', 5),)  # Lookback period to find pivots

    def __init__(self):
        self.addminperiod(self.params.lookback * 2 + 1)

    def next(self):
        lookback = self.params.lookback

        # Check for pivot high
        high = self.data.high.get(size=lookback * 2 + 1)
        if high[lookback] == max(high):
            self.lines.pivothigh[0] = high[lookback]
        else:
            self.lines.pivothigh[0] = float('nan')

        # Check for pivot low
        low = self.data.low.get(size=lookback * 2 + 1)
        if low[lookback] == min(low):
            self.lines.pivotlow[0] = low[lookback]
        else:
            self.lines.pivotlow[0] = float('nan')

# Create a simple strategy to use the PivotPoint indicator
class PivotPointStrategy(bt.Strategy):
    def __init__(self):
        self.pivot = PivotPoint(self.data)

    def next(self):
        if not pd.isna(self.pivot.pivothigh[0]):
            print(f'Pivot High on {self.data.datetime.date(0)} at {self.pivot.pivothigh[0]}')
        if not pd.isna(self.pivot.pivotlow[0]):
            print(f'Pivot Low on {self.data.datetime.date(0)} at {self.pivot.pivotlow[0]}')

# Create a Cerebro engine instance
cerebro = bt.Cerebro()

# Add the strategy to Cerebro
cerebro.addstrategy(PivotPointStrategy)

# Load data
data = bt.feeds.YahooFinanceData(
    dataname='AAPL',
    fromdate=pd.Timestamp('2023-01-01'),
    todate=pd.Timestamp('2023-12-31')
)

# Add the data to Cerebro
cerebro.adddata(data)

# Set initial cash
cerebro.broker.setcash(100000.0)

# Run the backtest
cerebro.run()

# Plot the results
cerebro.plot()