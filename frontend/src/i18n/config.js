import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      // zh: {
      //   translation: {
      //     visualizationTab: '可视化',
      //     regression: '回归分析',
      //     classification: '分类分析',
      //     dataPreview: '数据预览',
      //     appName: 'VisionaryLens',
      //     fileUpload: {
      //       dragText: '点击或拖拽文件到此区域',
      //       supportText: '支持 Excel 文件 (.xlsx, .xls) 或 CSV 文件上传',
      //       currentFile: '当前文件：',
      //       reupload: '重新上传',
      //       sampleFiles: '或者载入示例文件：',
      //       uploadSuccess: '文件上传成功',
      //       uploadError: '文件解析失败',
      //       readError: '文件读取失败',
      //       noData: '文件中没有有效数据',
      //       loadSampleError: '加载示例文件失败',
      //       loadSampleSuccess: '示例文件加载成功',
      //       sampleFilePrefix: '示例文件: '
      //     },
      //     visualization: {
      //       numericFeatures: '数值型特征',
      //       categoricalFeatures: '类别型特征',
      //       dataTransformation: '数据转换',
      //       chartType: '图表类型',
      //       charts: {
      //         pieChart: '饼图',
      //         histogramPlot: '直方图',
      //         boxPlot: '箱线图',
      //         violinPlot: '小提琴图',
      //         densityPlot: '密度图',
      //         scatterPlot: '散点图',
      //         barPlot: '条形图',
      //         groupedBarPlot: '分组条形图',
      //         mosaicPlot: '马赛克图',
      //         heatmapPlot: '热力图',
      //         '2dHistogram': '二维直方图',
      //         jointPlot: '联合分布图',
      //         kdeJointPlot: 'KDE联合分布图',
      //         linePlot: '折线图'
      //       },
      //       correlation: {
      //         title: '特征相关性热力图',
      //         filterLowCorrelation: '过滤低相关性',
      //         threshold: '阈值',
      //         coefficient: '相关系数'
      //       },
      //       selectColumn: '请选择要可视化的列',
      //       errorDrawing: '绘制图表出错',
      //       generateInsights: '生成数据洞察',
      //       regenerateInsights: '重新生成洞察',
      //       noInsightsYet: '点击上方按钮生成数据洞察',
      //       insights: {
      //         error: '获取数据洞察失败',
      //         title: '数据洞察',
      //         loading: '正在生成数据洞察...',
      //         poweredBy: '由'
      //       },
      //       axisLabel: {
      //         xAxis: 'X轴变量',
      //         yAxis: 'Y轴变量',
      //         xTransform: 'X轴变换',
      //         yTransform: 'Y轴变换'
      //       },
      //       warnings: {
      //         sameVariable: 'X轴和Y轴不能选择相同的变量'
      //       },
      //       placeholders: {
      //         selectXAxis: '选择X轴变量',
      //         selectYAxis: '选择Y轴变量',
      //         selectXTransform: '选择X轴变换',
      //         selectYTransform: '选择Y轴变换'
      //       },
      //       featureGroups: {
      //         numeric: '数值特征',
      //         categorical: '类别特征'
      //       },
      //       noData: '请选择要分析的变量',
      //       colorbar: {
      //         frequency: '频数',
      //         density: '密度'
      //       },
      //       filter: {
      //         low: {
      //           correlation: "过滤低相关性"
      //         }
      //       },
      //       threshold: "阈值",
      //     },
      //     modelAnalysis: {
      //       title: '基准模型评估',
      //       selectTarget: '选择目标变量',
      //       analyze: '开始分析',
      //       problemType: '问题类型',
      //       classification: '分类',
      //       regression: '回归',
      //       modelName: '模型名称',
      //       baselineScore: '基准分数',
      //       optimizedScore: '优化分数',
      //       improvement: '提升',
      //       loading: '正在分析模型...',
      //       error: '模型分析失败'
      //     },
      //     correlationAnalysis: '相关性分析',
      //     univariateAnalysis: '单变量分析',
      //     multivariateAnalysis: '多变量分析',
      //   }
      // },
      // ja: {
      //   translation: {
      //     visualizationTab: '可視化',
      //     regression: '回帰分析',
      //     classification: '分類分析',
      //     dataPreview: 'データプレビュー',
      //     appName: 'VisionaryLens',
      //     fileUpload: {
      //       dragText: 'クリックまたはファイルをドラッグ＆ドロップ',
      //       supportText: 'Excel (.xlsx, .xls) または CSV ファイルをサポート',
      //       currentFile: '現在のファイル：',
      //       reupload: '再アップロード',
      //       sampleFiles: 'またはサンプルファイルを読み込みます：',
      //       uploadSuccess: 'ファイルのアップロードに成功しました',
      //       uploadError: 'ファイルの解析に失敗しました',
      //       readError: 'ファイルの読み込みに失敗しました',
      //       noData: 'ファイルに有効なデータがありません',
      //       loadSampleError: 'サンプルファイルの読み込みに失敗しました',
      //       loadSampleSuccess: 'サンプルファイルの読み込みに成功しました',
      //       sampleFilePrefix: 'サンプルファイル: '
      //     },
      //     visualization: {
      //       numericFeatures: '数値データ',
      //       categoricalFeatures: 'カテゴリーデータ',
      //       dataTransformation: 'データ変換',
      //       chartType: 'グラフタイプ',
      //       charts: {
      //         pieChart: '円グラフ',
      //         histogramPlot: 'ヒストグラム',
      //         boxPlot: '箱ひげ図',
      //         violinPlot: 'バイオリンプロット',
      //         densityPlot: '密度プロット',
      //         scatterPlot: '散布図',
      //         barPlot: '条形図',
      //         groupedBarPlot: '分組条形図',
      //         mosaicPlot: 'マゼック図',
      //         heatmapPlot: '熱力図',
      //         '2dHistogram': '二次元ヒストグラム',
      //         jointPlot: '結合分布図',
      //         kdeJointPlot: 'KDE結合分布図',
      //         linePlot: '折れ線グラフ'
      //       },
      //       correlation: {
      //         title: '相関ヒートマップ',
      //         filterLowCorrelation: '低相関をフィルター',
      //         threshold: 'しきい値',
      //         coefficient: '相関係数'
      //       },
      //       selectColumn: '可視化する列を選択してください',
      //       errorDrawing: 'グラフの描画に失敗しました',
      //       generateInsights: 'データ分析を生成',
      //       regenerateInsights: '分析を再生成',
      //       noInsightsYet: '上のボタンをクリックしてデータ分析を生成',
      //       insights: {
      //         error: 'データ分析の取得に失敗しました',
      //         title: 'データ分析',
      //         loading: 'データ分析を生成中...',
      //         poweredBy: 'Powered by'
      //       },
      //       axisLabel: {
      //         xAxis: 'X軸変数',
      //         yAxis: 'Y軸変数',
      //         xTransform: 'X軸変換',
      //         yTransform: 'Y軸変換'
      //       },
      //       warnings: {
      //         sameVariable: 'X軸とY軸は同じ変数を選択できません'
      //       },
      //       placeholders: {
      //         selectXAxis: 'X軸変数を選択',
      //         selectYAxis: 'Y軸変数を選択',
      //         selectXTransform: 'X軸変換を選択',
      //         selectYTransform: 'Y軸変換を選択'
      //       },
      //       featureGroups: {
      //         numeric: '数値データ',
      //         categorical: 'カテゴリーデータ'
      //       },
      //       noData: '分析する変数を選択してください',
      //       colorbar: {
      //         frequency: '頻度',
      //         density: '密度'
      //       },
      //       filter: {
      //         low: {
      //           correlation: "低相関をフィルター"
      //         }
      //       },
      //       threshold: "しきい値",
      //     },
      //     modelAnalysis: {
      //       title: 'ベースラインモデル比較',
      //       selectTarget: '目標変数の選択',
      //       analyze: '分析開始',
      //       problemType: '問題タイプ',
      //       classification: '分類',
      //       regression: '回帰',
      //       modelName: 'モデル名',
      //       baselineScore: 'ベースラインスコア',
      //       optimizedScore: '最適化スコア',
      //       improvement: '改善',
      //       loading: 'モデル分析中...',
      //       error: 'モデル分析に失敗'
      //     },
      //     correlationAnalysis: '相関分析',
      //     univariateAnalysis: '単変量解析',
      //     multivariateAnalysis: '多変量解析',
      //   }
      // },
      hi: {
        translation: {
          visualizationTab: 'दृश्यांकन',
          regression: 'रिग्रेशन विश्लेषण',
          classification: 'क्लासिफिकेशन विश्लेषण',
          dataPreview: 'डेटा पूर्वावलोकन',
          appName: 'DeepVista',
          fileUpload: {
            dragText: 'फाइल अपलोड करने के लिए क्लिक करें या खींचें',
            supportText: 'Excel (.xlsx, .xls) या CSV फाइल अपलोड करें',
            currentFile: 'वर्तमान फाइल:',
            reupload: 'फिर से अपलोड करें',
            sampleFiles: 'या सैंपल फाइल लोड करें:',
            uploadSuccess: 'फाइल सफलतापूर्वक अपलोड हुई',
            uploadError: 'फाइल अपलोड करने में समस्या हुई',
            readError: 'फाइल पढ़ने में समस्या हुई',
            noData: 'फाइल में कोई वैध डेटा नहीं मिला',
            loadSampleError: 'सैंपल फाइल लोड करने में विफल',
            loadSampleSuccess: 'सैंपल फाइल सफलतापूर्वक लोड हुई',
            sampleFilePrefix: 'सैंपल फाइल: '
          },
          visualization: {
            numericFeatures: 'संख्यात्मक विशेषताएँ',
            categoricalFeatures: 'श्रेणीबद्ध विशेषताएँ',
            dataTransformation: 'डेटा परिवर्तन',
            chartType: 'चार्ट प्रकार',
            charts: {
              pieChart: 'पाई चार्ट',
              histogramPlot: 'हिस्टोग्राम',
              boxPlot: 'बॉक्स प्लॉट',
              violinPlot: 'वायलिन प्लॉट',
              densityPlot: 'घनत्व चार्ट',
              scatterPlot: 'स्कैटर प्लॉट',
              barPlot: 'बार चार्ट',
              groupedBarPlot: 'समूहित बार चार्ट',
              mosaicPlot: 'मोज़ेक चार्ट',
              heatmapPlot: 'हीटमैप',
              '2dHistogram': '2D हिस्टोग्राम',
              jointPlot: 'संयुक्त चार्ट',
              kdeJointPlot: 'KDE संयुक्त चार्ट',
              linePlot: 'लाइन चार्ट'
            },
            correlation: {
              title: 'विशेषताओं के बीच संबंध हीटमैप',
              filterLowCorrelation: 'कम संबंध वाले डेटा को छांटें',
              threshold: 'थ्रेशोल्ड (सीमा)',
              coefficient: 'संबंध गुणांक'
            },
            selectColumn: 'कृपया विश्लेषण के लिए एक कॉलम चुनें',
            errorDrawing: 'चार्ट बनाने में त्रुटि हुई',
            generateInsights: 'डेटा इनसाइट्स बनाएं',
            regenerateInsights: 'इनसाइट्स फिर से बनाएं',
            noInsightsYet: 'डेटा इनसाइट्स देखने के लिए ऊपर दिए गए बटन पर क्लिक करें',
            insights: {
              error: 'डेटा इनसाइट्स लाने में विफल',
              title: 'डेटा इनसाइट्स',
              loading: 'डेटा इनसाइट्स तैयार हो रही हैं...',
              poweredBy: 'द्वारा संचालित'
            },
            axisLabel: {
              xAxis: 'X-अक्ष वैरिएबल',
              yAxis: 'Y-अक्ष वैरिएबल',
              xTransform: 'X-अक्ष परिवर्तन',
              yTransform: 'Y-अक्ष परिवर्तन'
            },
            warnings: {
              sameVariable: 'X-अक्ष और Y-अक्ष के लिए समान वैरिएबल नहीं चुन सकते'
            },
            placeholders: {
              selectXAxis: 'X-अक्ष वैरिएबल चुनें',
              selectYAxis: 'Y-अक्ष वैरिएबल चुनें',
              selectXTransform: 'X-अक्ष परिवर्तन चुनें',
              selectYTransform: 'Y-अक्ष परिवर्तन चुनें'
            },
            featureGroups: {
              numeric: 'संख्यात्मक विशेषताएँ',
              categorical: 'श्रेणीबद्ध विशेषताएँ'
            },
            noData: 'कृपया विश्लेषण के लिए कोई डेटा चुनें',
            colorbar: {
              frequency: 'फ्रीक्वेंसी (आवृत्ति)',
              density: 'घनत्व'
            },
            filter: {
              low: {
                correlation: "कम संबंध वाले डेटा को छांटें"
              }
            },
            threshold: "सीमा (थ्रेशोल्ड)",
          },
          modelAnalysis: {
            title: 'बेसलाइन मॉडल विश्लेषण',
            selectTarget: 'लक्ष्य वैरिएबल चुनें',
            analyze: 'विश्लेषण शुरू करें',
            problemType: 'समस्या का प्रकार',
            classification: 'क्लासिफिकेशन',
            regression: 'रिग्रेशन',
            modelName: 'मॉडल नाम',
            baselineScore: 'बेसलाइन स्कोर',
            optimizedScore: 'सुधारित स्कोर',
            improvement: 'सुधार',
            loading: 'मॉडल का विश्लेषण किया जा रहा है...',
            error: 'मॉडल विश्लेषण विफल'
          },
          correlationAnalysis: 'संबंध विश्लेषण',
          univariateAnalysis: 'एकल-चर विश्लेषण',
          multivariateAnalysis: 'बहु-चर विश्लेषण',
        }
      },
      mr: {
    "translation": {
      "visualizationTab": "व्हिज्युअलायझेशन",
      "regression": "रिग्रेशन अनालिसिस",
      "classification": "क्लासिफिकेशन अनालिसिस",
      "dataPreview": "डेटा प्रिव्ह्यू",
      "appName": "DeepVista",
      "fileUpload": {
        "dragText": "फाईल अपलोड करायला क्लिक करा किंवा ड्रॅग करा",
        "supportText": "Excel (.xlsx, .xls) किंवा CSV फाईल अपलोड करता येईल",
        "currentFile": "सध्याची फाईल:",
        "reupload": "परत अपलोड करा",
        "sampleFiles": "किंवा सॅम्पल फाईल लोड करा:",
        "uploadSuccess": "फाईल यशस्वीरित्या अपलोड झाली",
        "uploadError": "फाईल प्रोसेस करता आली नाही",
        "readError": "फाईल वाचता आली नाही",
        "noData": "फाईलमध्ये डेटा नाही",
        "loadSampleError": "सॅम्पल फाईल लोड करायला एरर आली",
        "loadSampleSuccess": "सॅम्पल फाईल यशस्वीरित्या लोड झाली",
        "sampleFilePrefix": "सॅम्पल फाईल:"
      },
      "visualization": {
        "numericFeatures": "नंबर डेटा",
        "categoricalFeatures": "कॅटेगरी डेटा",
        "dataTransformation": "डेटा ट्रान्सफॉर्मेशन",
        "chartType": "चार्ट टाइप",
        "charts": {
          "pieChart": "पाय चार्ट",
          "histogramPlot": "हिस्टोग्राम",
          "boxPlot": "बॉक्स प्लॉट",
          "violinPlot": "व्हायोलिन प्लॉट",
          "densityPlot": "डेंसिटी प्लॉट",
          "scatterPlot": "स्कॅटर प्लॉट",
          "barPlot": "बार चार्ट",
          "groupedBarPlot": "ग्रुप्ड बार चार्ट",
          "mosaicPlot": "मोसाईक प्लॉट",
          "heatmapPlot": "हिटमॅप",
          "2dHistogram": "2D हिस्टोग्राम",
          "jointPlot": "जॉइंट प्लॉट",
          "kdeJointPlot": "KDE जॉइंट प्लॉट",
          "linePlot": "लाइन चार्ट"
        },
        "correlation": {
          "title": "फीचर्स कोरिलेशन हिटमॅप",
          "filterLowCorrelation": "लो कोरिलेशन फिल्टर करा",
          "threshold": "थ्रेशहोल्ड",
          "coefficient": "कोरिलेशन कोएफिशंट"
        },
        "selectColumn": "चार्टसाठी कॉलम सिलेक्ट करा",
        "errorDrawing": "चार्ट काढताना एरर आली",
        "generateInsights": "डेटा इनसाइट्स जनरेट करा",
        "regenerateInsights": "परत इनसाइट्स जनरेट करा",
        "noInsightsYet": "वरील बटणावर क्लिक करून डेटा इनसाइट्स मिळवा",
        "insights": {
          "error": "डेटा इनसाइट्स आणता आले नाहीत",
          "title": "डेटा इनसाइट्स",
          "loading": "डेटा इनसाइट्स तयार होत आहे...",
          "poweredBy": "Powered by"
        },
        "axisLabel": {
          "xAxis": "X अक्ष",
          "yAxis": "Y अक्ष",
          "xTransform": "X अक्ष ट्रान्सफॉर्म",
          "yTransform": "Y अक्ष ट्रान्सफॉर्म"
        },
        "warnings": {
          "sameVariable": "X आणि Y साठी वेगवेगळे व्हेरिएबल सिलेक्ट करा"
        },
        "placeholders": {
          "selectXAxis": "X अक्ष सिलेक्ट करा",
          "selectYAxis": "Y अक्ष सिलेक्ट करा",
          "selectXTransform": "X अक्ष ट्रान्सफॉर्म निवडा",
          "selectYTransform": "Y अक्ष ट्रान्सफॉर्म निवडा"
        },
        "featureGroups": {
          "numeric": "नंबर फीचर्स",
          "categorical": "कॅटेगरी फीचर्स"
        },
        "noData": "कृपया अ‍ॅनालिसिससाठी डेटा निवडा",
        "colorbar": {
          "frequency": "फ्रिक्वेन्सी",
          "density": "डेंसिटी"
        },
        "filter": {
          "low": {
            "correlation": "लो कोरिलेशन फिल्टर करा"
          }
        },
        "threshold": "थ्रेशहोल्ड"
      },
      "modelAnalysis": {
        "title": "बेसलाइन मॉडेल अ‍ॅनालिसिस",
        "selectTarget": "टार्गेट व्हेरिएबल निवडा",
        "analyze": "अ‍ॅनालिसिस सुरू करा",
        "problemType": "प्रॉब्लेम टाइप",
        "classification": "क्लासिफिकेशन",
        "regression": "रिग्रेशन",
        "modelName": "मॉडेल नाव",
        "baselineScore": "बेसलाइन स्कोअर",
        "optimizedScore": "ऑप्टिमाइझ्ड स्कोअर",
        "improvement": "इंप्रूव्हमेंट",
        "loading": "मॉडेल अ‍ॅनालिसिस सुरू आहे...",
        "error": "मॉडेल अ‍ॅनालिसिस फेल झाले"
      },
      "correlationAnalysis": "कोरिलेशन अ‍ॅनालिसिस",
      "univariateAnalysis": "सिंगल व्हेरिएबल अ‍ॅनालिसिस",
      "multivariateAnalysis": "मल्टिपल व्हेरिएबल अ‍ॅनालिसिस"
    }
  },
      en: {
        translation: {
          visualizationTab: 'Visualization',
          regression: 'Regression Analysis',
          classification: 'Classification Analysis',
          dataPreview: 'Data Preview',
          appName: 'DeepVista',
          fileUpload: {
            dragText: 'Click or drag file to this area',
            supportText: 'Support Excel (.xlsx, .xls) or CSV files',
            currentFile: 'Current file: ',
            reupload: 'Re-upload',
            sampleFiles: 'Or load sample files:',
            uploadSuccess: 'File uploaded successfully',
            uploadError: 'Failed to parse file',
            readError: 'Failed to read file',
            noData: 'No valid data in file',
            loadSampleError: 'Failed to load sample file',
            loadSampleSuccess: 'Sample file loaded successfully',
            sampleFilePrefix: 'Sample file: '
          },
          visualization: {
            numericFeatures: 'Numeric Features',
            categoricalFeatures: 'Categorical Features',
            dataTransformation: 'Data Transformation',
            chartType: 'Chart Type',
            charts: {
              pieChart: 'Pie Chart',
              histogramPlot: 'Histogram',
              boxPlot: 'Box Plot',
              violinPlot: 'Violin Plot',
              densityPlot: 'Density Plot',
              scatterPlot: 'Scatter Plot',
              barPlot: 'Bar Plot',
              groupedBarPlot: 'Grouped Bar Plot',
              mosaicPlot: 'Mosaic Plot',
              heatmapPlot: 'Heatmap Plot',
              '2dHistogram': '2D Histogram',
              jointPlot: 'Joint Plot',
              kdeJointPlot: 'KDE Joint Plot',
              linePlot: 'Line Plot'
            },
            correlation: {
              title: 'Feature Correlation Heatmap',
              filterLowCorrelation: 'Filter Low Correlation',
              threshold: 'Threshold',
              coefficient: 'Correlation Coefficient'
            },
            selectColumn: 'Please select a column to visualize',
            errorDrawing: 'Error drawing chart',
            generateInsights: 'Generate Insights',
            regenerateInsights: 'Regenerate Insights',
            noInsightsYet: 'Click the button above to generate insights',
            insights: {
              error: 'Failed to fetch insights',
              title: 'Data Insights',
              loading: 'Generating insights...',
              poweredBy: 'Powered by'
            },
            axisLabel: {
              xAxis: 'X Axis Variable',
              yAxis: 'Y Axis Variable',
              xTransform: 'X Axis Transformation',
              yTransform: 'Y Axis Transformation'
            },
            warnings: {
              sameVariable: 'X and Y axes cannot select the same variable'
            },
            placeholders: {
              selectXAxis: 'Select X Axis Variable',
              selectYAxis: 'Select Y Axis Variable',
              selectXTransform: 'Select X Axis Transformation',
              selectYTransform: 'Select Y Axis Transformation'
            },
            featureGroups: {
              numeric: 'Numeric Features',
              categorical: 'Categorical Features'
            },
            noData: 'Please select a variable to analyze',
            colorbar: {
              frequency: 'Frequency',
              density: 'Density'
            },
            filter: {
              low: {
                correlation: "Filter Low Correlation"
              }
            },
            threshold: "Threshold",
          },
          modelAnalysis: {
            title: 'Baseline Model Evaluation',
            selectTarget: 'Select Target Variable',
            analyze: 'Start Analysis',
            problemType: 'Problem Type',
            classification: 'Classification',
            regression: 'Regression',
            modelName: 'Model Name',
            baselineScore: 'Baseline Score',
            optimizedScore: 'Optimized Score',
            improvement: 'Improvement',
            loading: 'Analyzing models...',
            error: 'Model analysis failed'
          },
          correlationAnalysis: 'Correlation Analysis',
          univariateAnalysis: 'Univariate Analysis',
          multivariateAnalysis: 'Multivariate Analysis',
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 